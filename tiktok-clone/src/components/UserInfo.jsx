import { useState } from 'react'
import MusicDisc from './MusicDisc'

export default function UserInfo({ video, isPlaying, onFollow }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      style={{
        position: 'absolute',
        bottom: '80px',
        left: '12px',
        right: '68px',
        zIndex: 20,
        maxWidth: 'calc(100% - 80px)',
        overflow: 'hidden',
      }}
    >
      {/* Music disc */}
      <MusicDisc isPlaying={isPlaying} music={video.music} />

      {/* User row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          marginTop: '8px',
          marginBottom: '6px',
          width: '100%',
          overflow: 'hidden',
        }}
      >
        {/* Avatar */}
        <img
          src={video.user.avatar}
          alt={video.user.name}
          style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            border: '2px solid rgba(255,255,255,0.8)',
            objectFit: 'cover',
            flexShrink: 0,
          }}
        />

        {/* Username */}
        <span
          style={{
            color: '#fff',
            fontWeight: 700,
            fontSize: '12px',
            flexShrink: 1,
            minWidth: 0,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          @{video.user.name}
        </span>

        {/* Verified */}
        {video.user.verified && (
          <span style={{ color: '#60a5fa', fontSize: '10px', flexShrink: 0 }}>✓</span>
        )}

        {/* Follow button */}
        <button
          onClick={(e) => { e.stopPropagation(); onFollow() }}
          style={{
            flexShrink: 0,
            padding: '2px 8px',
            borderRadius: '20px',
            fontSize: '11px',
            fontWeight: 700,
            border: 'none',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            background: video.following
              ? 'rgba(255,255,255,0.15)'
              : 'linear-gradient(to right, #ec4899, #f43f5e)',
            color: video.following ? 'rgba(255,255,255,0.7)' : '#fff',
          }}
        >
          {video.following ? 'Following' : 'Follow'}
        </button>
      </div>

      {/* Caption */}
      <div
        style={{
          width: '100%',
          overflow: 'hidden',
        }}
      >
        <span
          style={{
            color: 'rgba(255,255,255,0.9)',
            fontSize: '11px',
            lineHeight: '1.4',
            display: '-webkit-box',
            WebkitLineClamp: expanded ? 'unset' : 2,
            WebkitBoxOrient: 'vertical',
            overflow: expanded ? 'visible' : 'hidden',
            wordBreak: 'break-word',
            overflowWrap: 'break-word',
          }}
        >
          {video.description}
        </span>
        <button
          onClick={(e) => { e.stopPropagation(); setExpanded(v => !v) }}
          style={{
            background: 'none',
            border: 'none',
            color: 'rgba(255,255,255,0.6)',
            fontSize: '11px',
            fontWeight: 600,
            cursor: 'pointer',
            padding: 0,
            marginLeft: '4px',
          }}
        >
          {expanded ? 'less' : 'more'}
        </button>
      </div>
    </div>
  )
}