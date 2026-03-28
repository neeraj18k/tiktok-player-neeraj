import { useState, useEffect } from 'react'
import VideoFeed from './components/VideoFeed'

export default function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [activeNav, setActiveNav] = useState('Home')

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const navItems = [
    { icon: '🏠', label: 'Home' },
    { icon: '🔍', label: 'Discover' },
    { icon: null,  label: 'Create' },
    { icon: '📬', label: 'Inbox' },
    { icon: '👤', label: 'Profile' },
  ]

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      width: '100vw',
      height: '100vh',
      background: '#000',
      overflow: 'hidden',
    }}>

      {/* Top header */}
      <header style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 16px 10px',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 100%)',
      }}>
        <span style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: '20px',
          fontWeight: 800,
          color: '#fff',
          letterSpacing: '-0.5px',
        }}>
          Tik<span style={{ color: '#ec4899' }}>Flow</span>
        </span>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          {['Following', 'For You', 'Live'].map((item) => (
            <button key={item} style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: item === 'For You' ? '#fff' : 'rgba(255,255,255,0.5)',
              fontSize: '13px',
              fontWeight: item === 'For You' ? 700 : 400,
              borderBottom: item === 'For You' ? '2px solid #ec4899' : 'none',
              paddingBottom: item === 'For You' ? '2px' : '0',
              fontFamily: 'DM Sans, sans-serif',
            }}>
              {item}
            </button>
          ))}
        </nav>

        <button
          onClick={() => setDarkMode(d => !d)}
          style={{
            width: '34px', height: '34px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.12)',
            border: '1px solid rgba(255,255,255,0.2)',
            cursor: 'pointer',
            fontSize: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </header>

      <VideoFeed darkMode={darkMode} />

      {/* Bottom nav — chota */}
      <nav style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        zIndex: 100,
        padding: '4px 16px 6px',
        background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)',
      }}>
        <div style={{
          maxWidth: '480px',
          margin: '0 auto',
          background: 'rgba(20,20,20,0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '16px',
          padding: '5px 12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
          {navItems.map((item) =>
            item.icon === null ? (
              <button
                key="create"
                onClick={() => setActiveNav('Create')}
                style={{
                  marginTop: '-14px',
                  width: '38px', height: '26px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #ec4899, #f43f5e)',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  color: '#fff',
                  fontWeight: 700,
                  boxShadow: '0 4px 15px rgba(236,72,153,0.5)',
                  flexShrink: 0,
                }}
              >+</button>
            ) : (
              <button
                key={item.label}
                onClick={() => setActiveNav(item.label)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '2px 6px',
                  borderRadius: '8px',
                  color: activeNav === item.label ? '#fff' : 'rgba(255,255,255,0.4)',
                  transition: 'all 0.2s ease',
                }}
              >
                <span style={{ fontSize: '16px' }}>{item.icon}</span>
                <span style={{
                  fontSize: '9px',
                  fontWeight: activeNav === item.label ? 700 : 400,
                  fontFamily: 'DM Sans, sans-serif',
                }}>
                  {item.label}
                </span>
                {activeNav === item.label && (
                  <div style={{
                    width: '3px', height: '3px',
                    borderRadius: '50%',
                    background: '#ec4899',
                  }} />
                )}
              </button>
            )
          )}
        </div>
      </nav>
    </div>
  )
}