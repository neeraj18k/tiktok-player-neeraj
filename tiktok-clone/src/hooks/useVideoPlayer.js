import { useRef, useState, useEffect, useCallback } from 'react'

export function useVideoPlayer({ isActive }) {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [showIcon, setShowIcon] = useState(false)
  const iconTimerRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (isActive) {
      const tryPlay = () => {
        video.play()
          .then(() => setIsPlaying(true))
          .catch((err) => {
            if (err.name === 'NotAllowedError') {
              video.muted = true
              video.play().then(() => setIsPlaying(true)).catch(() => {})
            }
          })
      }
      if (video.readyState >= 2) {
        tryPlay()
      } else {
        video.addEventListener('canplay', tryPlay, { once: true })
        return () => video.removeEventListener('canplay', tryPlay)
      }
    } else {
      video.pause()
      video.currentTime = 0
      setIsPlaying(false)
      setProgress(0)
    }
  }, [isActive])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const onTimeUpdate = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100)
      }
    }
    const onLoaded = () => setIsLoaded(true)
    const onEnded = () => {
      video.currentTime = 0
      video.play().catch(() => {})
    }

    video.addEventListener('timeupdate', onTimeUpdate)
    video.addEventListener('canplay', onLoaded)
    video.addEventListener('loadedmetadata', onLoaded)
    video.addEventListener('ended', onEnded)

    return () => {
      video.removeEventListener('timeupdate', onTimeUpdate)
      video.removeEventListener('canplay', onLoaded)
      video.removeEventListener('loadedmetadata', onLoaded)
      video.removeEventListener('ended', onEnded)
    }
  }, [])

  const flashIcon = useCallback(() => {
    setShowIcon(true)
    clearTimeout(iconTimerRef.current)
    iconTimerRef.current = setTimeout(() => setShowIcon(false), 900)
  }, [])

  const togglePlay = useCallback(() => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {})
    } else {
      video.pause()
      setIsPlaying(false)
    }
    flashIcon()
  }, [flashIcon])

  const seekTo = useCallback((pct) => {
    const video = videoRef.current
    if (!video || !video.duration) return
    video.currentTime = (pct / 100) * video.duration
  }, [])

  return {
    videoRef,
    isPlaying,
    progress,
    isLoaded,
    showIcon,
    togglePlay,
    seekTo,
  }
}