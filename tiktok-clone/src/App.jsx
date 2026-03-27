import { useState } from 'react'
import VideoFeed from './components/VideoFeed'

export default function App() {
  const [darkMode, setDarkMode] = useState(true)

  if (darkMode) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      background: '#000',
      overflow: 'hidden',
      width: '100%',
      height: '100%',
    }}>

      {/* Top header */}
      <header style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 16px 8px',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), transparent)',
      }}>
        <span style={{ fontFamily: 'Syne, sans-serif', fontSize: '20px', fontWeight: 800, color: '#fff' }}>
          Tik<span style={{ color: '#ec4899' }}>Flow</span>
        </span>

        <nav style={{ display: 'flex', gap: '16px' }}>
          <button style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', background: 'none', border: 'none', cursor: 'pointer' }}>Following</button>
          <button style={{ color: '#fff', fontSize: '12px', fontWeight: 700, background: 'none', border: 'none', borderBottom: '2px solid #ec4899', paddingBottom: '2px', cursor: 'pointer' }}>For You</button>
          <button style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', background: 'none', border: 'none', cursor: 'pointer' }}>Live</button>
        </nav>

        <button
          onClick={() => setDarkMode(d => !d)}
          style={{
            width: '32px', height: '32px', borderRadius: '50%',
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.2)',
            cursor: 'pointer', fontSize: '14px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </header>

      {/* Video Feed */}
      <VideoFeed darkMode={darkMode} />

      {/* Bottom nav */}
      <nav style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        zIndex: 50,
        padding: '8px 12px 10px',
        background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
      }}>
        <div style={{
          maxWidth: '400px',
          margin: '0 auto',
          background: 'rgba(255,255,255,0.07)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '16px',
          padding: '8px 8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
          {[
            { icon: '🏠', label: 'Home',    active: true  },
            { icon: '🔍', label: 'Discover', active: false },
            { icon: null,  label: 'Create',  active: false },
            { icon: '📬', label: 'Inbox',   active: false },
            { icon: '👤', label: 'Profile', active: false },
          ].map((item) =>
            item.icon === null ? (
              <button key="create" style={{
                marginTop: '-16px',
                width: '40px', height: '28px',
                borderRadius: '10px',
                background: 'linear-gradient(to right, #ec4899, #f43f5e)',
                border: 'none', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '18px', color: '#fff', fontWeight: 700,
                boxShadow: '0 4px 15px rgba(236,72,153,0.4)',
              }}>+</button>
            ) : (
              <button key={item.label} style={{
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', gap: '2px',
                background: 'none', border: 'none', cursor: 'pointer',
                color: item.active ? '#fff' : 'rgba(255,255,255,0.4)',
              }}>
                <span style={{ fontSize: '18px' }}>{item.icon}</span>
                <span style={{ fontSize: '9px', fontWeight: 600 }}>{item.label}</span>
                {item.active && <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#ec4899' }} />}
              </button>
            )
          )}
        </div>
      </nav>
    </div>
  )
}