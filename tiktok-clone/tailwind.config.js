/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        'heart-burst': {
          '0%':   { transform: 'scale(0) rotate(-15deg)', opacity: '0' },
          '30%':  { transform: 'scale(1.4) rotate(5deg)',  opacity: '1' },
          '60%':  { transform: 'scale(1.1) rotate(-3deg)', opacity: '1' },
          '100%': { transform: 'scale(0) rotate(0deg)',    opacity: '0' },
        },
        'like-pop': {
          '0%':   { transform: 'scale(1)' },
          '40%':  { transform: 'scale(1.5)' },
          '70%':  { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' },
        },
        'spin-disc': {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(360deg)' },
        },
        'fade-in-up': {
          '0%':   { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-out': {
          '0%':   { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-6px)' },
        },
        'ripple': {
          '0%':   { transform: 'scale(0)', opacity: '0.6' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
      },
      animation: {
        'heart-burst': 'heart-burst 0.85s cubic-bezier(0.36,0.07,0.19,0.97) forwards',
        'like-pop':    'like-pop 0.35s ease forwards',
        'spin-disc':   'spin-disc 4s linear infinite',
        'fade-in-up':  'fade-in-up 0.4s ease forwards',
        'fade-out':    'fade-out 0.4s ease forwards',
        'float':       'float 3s ease-in-out infinite',
        'ripple':      'ripple 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}