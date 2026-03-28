import { useRef, useState, useEffect, useCallback } from 'react'
import { videos } from '../data/videoData'
import VideoCard from './VideoCard'

const TOTAL = videos.length
const extendedVideos = [videos[TOTAL - 1], ...videos, videos[0]]

export default function VideoFeed({ darkMode }) {
  const feedRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(1)
  const [isMuted, setIsMuted] = useState(true)
  const isJumping = useRef(false)

  // ✅ Start at real first video
  useEffect(() => {
    const feed = feedRef.current
    if (!feed) return
    feed.scrollTo({ top: feed.clientHeight, behavior: 'instant' })
  }, [])

  // ✅ Preload next and previous video
  useEffect(() => {
    extendedVideos.forEach((video, idx) => {
      // Only preload adjacent videos
      if (Math.abs(idx - activeIndex) <= 1) {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = 'video'
        link.href = video.url
        // Only add if not already added
        if (!document.querySelector(`link[href="${video.url}"]`)) {
          document.head.appendChild(link)
        }
      }
    })
  }, [activeIndex])

  // Scroll + infinite loop
  useEffect(() => {
    const feed = feedRef.current
    if (!feed) return

    const handleScroll = () => {
      if (isJumping.current) return
      const cardH = feed.clientHeight
      const index = Math.round(feed.scrollTop / cardH)
      setActiveIndex(index)

      if (index === TOTAL + 1) {
        isJumping.current = true
        setTimeout(() => {
          feed.scrollTo({ top: cardH * 1, behavior: 'instant' })
          setActiveIndex(1)
          isJumping.current = false
        }, 50)
      }

      if (index === 0) {
        isJumping.current = true
        setTimeout(() => {
          feed.scrollTo({ top: cardH * TOTAL, behavior: 'instant' })
          setActiveIndex(TOTAL)
          isJumping.current = false
        }, 50)
      }
    }

    feed.addEventListener('scroll', handleScroll, { passive: true })
    return () => feed.removeEventListener('scroll', handleScroll)
  }, [activeIndex])

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      const feed = feedRef.current
      if (!feed || isJumping.current) return
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        feed.scrollBy({ top: feed.clientHeight, behavior: 'smooth' })
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        feed.scrollBy({ top: -feed.clientHeight, behavior: 'smooth' })
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  const toggleMute = useCallback(() => setIsMuted(m => !m), [])

  return (
    <div
      ref={feedRef}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100vw',
        height: '100vh',
        overflowY: 'scroll',
        overflowX: 'hidden',
        scrollSnapType: 'y mandatory',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        background: '#000',
      }}
    >
      {extendedVideos.map((video, extIdx) => (
        <div
          key={`${video.id}-${extIdx}`}
          style={{
            width: '100vw',
            height: '100vh',
            scrollSnapAlign: 'start',
            scrollSnapStop: 'always',
            flexShrink: 0,
            position: 'relative',
            overflow: 'hidden',
            background: '#000',
          }}
        >
          <VideoCard
            video={video}
            isActive={activeIndex === extIdx}
            isMuted={isMuted}
            onMuteToggle={toggleMute}
          />
        </div>
      ))}
    </div>
  )
}