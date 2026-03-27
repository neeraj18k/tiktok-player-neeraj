import { useState, useCallback } from 'react'
import VideoPlayer from './VideoPlayer'
import ActionBar from './ActionBar'
import UserInfo from './UserInfo'

export default function VideoCard({ video, isActive, isMuted, onMuteToggle }) {
  const [localVideo, setLocalVideo] = useState(video)

  const handleLike = useCallback(() => {
    setLocalVideo(v => ({
      ...v,
      liked: !v.liked,
      likes: v.liked ? v.likes - 1 : v.likes + 1,
    }))
  }, [])

  const handleBookmark = useCallback(() => {
    setLocalVideo(v => ({
      ...v,
      bookmarked: !v.bookmarked,
      bookmarks: v.bookmarked ? v.bookmarks - 1 : v.bookmarks + 1,
    }))
  }, [])

  const handleFollow = useCallback(() => {
    setLocalVideo(v => ({ ...v, following: !v.following }))
  }, [])

  const handleComment = useCallback(() => {}, [])

  const handleShare = useCallback(() => {
    if (navigator.share) {
      navigator.share({
        title: `@${localVideo.user.name}`,
        text: localVideo.description,
        url: window.location.href,
      })
    }
  }, [localVideo])

  return (
    <div className="video-card grain">
      <VideoPlayer
        video={localVideo}
        isActive={isActive}
        isMuted={isMuted}
      />
      <ActionBar
        likes={localVideo.likes}
        comments={localVideo.comments}
        shares={localVideo.shares}
        bookmarks={localVideo.bookmarks}
        liked={localVideo.liked}
        bookmarked={localVideo.bookmarked}
        onLike={handleLike}
        onBookmark={handleBookmark}
        onComment={handleComment}
        onShare={handleShare}
        isMuted={isMuted}
        onToggleMute={onMuteToggle}
      />
      <UserInfo
        video={localVideo}
        isPlaying={isActive}
        onFollow={handleFollow}
      />
    </div>
  )
}