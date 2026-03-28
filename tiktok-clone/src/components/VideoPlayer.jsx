import { useRef, useState, useCallback, useEffect } from 'react'
import { useVideoPlayer } from '../hooks/useVideoPlayer'

export default function VideoPlayer({ video, isActive, isMuted }) {
  const {
    videoRef,
    isPlaying,
    progress,
    isLoaded,
    showIcon,
    togglePlay,
    seekTo,
  } = useVideoPlayer({ isActive })

  const [doubleTapHeart, setDoubleTapHeart] = useState(false)
  const lastTapRef = useRef(0)
  const longPressRef = useRef(null)
  const [longPressing, setLongPressing] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted
    }
  }, [isMuted, videoRef])

  const handleTap = useCallback(() => {
    const now = Date.now()
    const delta = now - lastTapRef.current
    lastTapRef.current = now
    if (delta < 300) {
      setDoubleTapHeart(false)
      requestAnimationFrame(() => setDoubleTapHeart(true))
      setTimeout(() => setDoubleTapHeart(false), 900)
    } else {
      togglePlay()
    }
  }, [togglePlay])

  const handlePointerDown = useCallback(() => {
    longPressRef.current = setTimeout(() => {
      setLongPressing(true)
      videoRef.current?.pause()
    }, 500)
  }, [videoRef])

  const handlePointerUp = useCallback(() => {
    clearTimeout(longPressRef.current)
    if (longPressing) {
      setLongPressing(false)
      if (isActive) videoRef.current?.play().catch(() => {})
    }
  }, [longPressing, isActive, videoRef])

  const handleProgressClick = useCallback((e) => {
    e.stopPropagation()
    const rect = e.currentTarget.getBoundingClientRect()
    const pct = ((e.clientX - rect.left) / rect.width) * 100
    seekTo(pct)
  }, [seekTo])

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      background: '#000',
    }}>

      {/* ✅ Skeleton loader */}
      {!isLoaded && (
        <div className="skeleton" style={{
          position: 'absolute',
          inset: 0,
          zIndex: 10,
        }} />
      )}

      {/* ✅ Native video — preload auto for faster load */}
      <video
        ref={videoRef}
        src={video.url}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        loop
        muted={isMuted}
        playsInline
        preload="auto"
        onClick={handleTap}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      />

      {/* Gradient overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.0) 40%, rgba(0,0,0,0.2) 100%)',
        pointerEvents: 'none',
        zIndex: 5,
      }} />

      {/* Play/Pause icon */}
      {showIcon && (
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
          zIndex: 30,
        }}>
          <div className="animate-heart-burst" style={{
            width: '64px', height: '64px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '28px',
          }}>
            {isPlaying ? '▶️' : '⏸️'}
          </div>
        </div>
      )}

      {/* Double tap heart */}
      {doubleTapHeart && (
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
          zIndex: 30,
        }}>
          <span className="animate-heart-burst"
            style={{ fontSize: '80px', userSelect: 'none' }}>
            ❤️
          </span>
        </div>
      )}

      {/* Long press indicator */}
      {longPressing && (
        <div style={{
          position: 'absolute',
          top: '70px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '20px',
          padding: '4px 14px',
          zIndex: 30,
          pointerEvents: 'none',
        }}>
          <span style={{ color: '#fff', fontSize: '12px' }}>Paused</span>
        </div>
      )}

      {/* ✅ Progress bar — above bottom nav, always visible */}
      <div
        onClick={handleProgressClick}
        style={{
          position: 'absolute',
          bottom: '58px',      // ✅ nav height ke upar
          left: 0,
          right: 0,
          height: '3px',
          background: 'rgba(255,255,255,0.25)',
          cursor: 'pointer',
          zIndex: 999,
        }}
      >
        <div style={{
          height: '100%',
          width: `${progress}%`,
          background: 'linear-gradient(to right, #ec4899, #f43f5e)',
          borderRadius: '2px',
          transition: 'width 0.1s linear',
          minWidth: progress > 0 ? '4px' : '0',
        }} />
      </div>

    </div>
  )
}