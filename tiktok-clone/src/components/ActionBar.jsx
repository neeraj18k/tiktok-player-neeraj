import { useState, useCallback } from 'react'
import { formatCount } from '../data/videoData'

function ActionButton({ icon, count, onClick, active, activeColor = 'text-red-500', label }) {
  const [animating, setAnimating] = useState(false)

  const handleClick = useCallback((e) => {
    e.stopPropagation()
    setAnimating(true)
    setTimeout(() => setAnimating(false), 400)
    onClick?.()
  }, [onClick])

  return (
    <button
      onClick={handleClick}
      aria-label={label}
      className="action-btn flex flex-col items-center gap-0.5 group"
    >
      <div className={`
        relative w-10 h-10 rounded-full glass flex items-center justify-center
        transition-all duration-200 active:scale-90
        ${animating ? 'animate-like-pop' : ''}
        group-hover:bg-white/15
      `}>
        <span className={`btn-icon text-xl transition-colors duration-200
          ${active ? activeColor : 'text-white'}`}>
          {icon}
        </span>
        {animating && (
          <span className="absolute inset-0 rounded-full bg-white/20 animate-ripple pointer-events-none" />
        )}
      </div>
      {count !== undefined && (
        <span className="text-white text-[10px] font-semibold drop-shadow-sm">
          {formatCount(count)}
        </span>
      )}
    </button>
  )
}

export default function ActionBar({
  likes, comments, shares, bookmarks,
  liked, bookmarked, onLike, onBookmark, onComment, onShare,
  isMuted, onToggleMute,
}) {
  return (
    <div className="absolute right-2 bottom-24 flex flex-col items-center gap-2 z-20">

      <button
        onClick={(e) => { e.stopPropagation(); onToggleMute() }}
        className="w-9 h-9 rounded-full glass flex items-center justify-center mb-1 active:scale-90 transition-transform"
        aria-label="Toggle sound"
      >
        <span className="text-white text-base">{isMuted ? '🔇' : '🔊'}</span>
      </button>

      <ActionButton
        icon={liked ? '❤️' : '🤍'}
        count={likes}
        onClick={onLike}
        active={liked}
        label="Like"
      />
      <ActionButton
        icon="💬"
        count={comments}
        onClick={onComment}
        label="Comment"
      />
      <ActionButton
        icon="↗️"
        count={shares}
        onClick={onShare}
        label="Share"
      />
      <ActionButton
        icon={bookmarked ? '🔖' : '📑'}
        count={bookmarks}
        onClick={onBookmark}
        active={bookmarked}
        activeColor="text-yellow-400"
        label="Bookmark"
      />
    </div>
  )
}