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

  useEffect(() => {
    const feed = feedRef.current
    if (!feed) return
    feed.scrollTo({ top: feed.clientHeight * 1, behavior: 'instant' })
  }, [])

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
  }, [])

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
    <div ref={feedRef} className={`feed-container ${darkMode ? 'dark' : ''}`}>
      {extendedVideos.map((video, extIdx) => (
        <div
          key={`${video.id}-${extIdx}`}
          style={{
            height: '100dvh',
            scrollSnapAlign: 'start',
            scrollSnapStop: 'always',
            flexShrink: 0,
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