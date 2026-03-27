import { useRef, useState, useCallback, useEffect } from 'react'
import { useVideoPlayer } from '../hooks/useVideoPlayer'

export default function VideoPlayer({ video, isActive, isMuted }) {
  const {
    videoRef, isPlaying, progress, isLoaded,
    showIcon, togglePlay, seekTo,
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
    <div className="relative w-full h-full bg-black">
      {!isLoaded && <div className="absolute inset-0 skeleton z-10" />}

      <video
        ref={videoRef}
        src={video.url}
        className="absolute inset-0 w-full h-full object-cover"
        loop
        muted={isMuted}
        playsInline
        preload="metadata"
        onClick={handleTap}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-black/20 pointer-events-none" />

      {showIcon && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
          <div className="w-16 h-16 rounded-full glass flex items-center justify-center animate-heart-burst">
            <span className="text-3xl">{isPlaying ? '▶️' : '⏸️'}</span>
          </div>
        </div>
      )}

      {doubleTapHeart && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
          <span className="text-7xl animate-heart-burst select-none">❤️</span>
        </div>
      )}

      {longPressing && (
        <div className="absolute top-16 left-1/2 -translate-x-1/2 glass px-3 py-1 rounded-full z-30 pointer-events-none">
          <span className="text-white text-xs font-medium">Paused</span>
        </div>
      )}

      <div
        className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 cursor-pointer z-20 group"
        onClick={handleProgressClick}
      >
        <div
          className="progress-bar h-full bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}