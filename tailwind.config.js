/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E50914',
        secondary: '#141414',
        dark: '#000000',
        light: '#FFFFFF',
        gray: {
          850: '#1a1a1a',
          900: '#0a0a0a',
        },
        modulos: {
          ninos: '#00B4D8',
          preadolescentes: '#FF8500',
          adolescentes: '#E50914',
          jovenes: '#0077B6',
          evangelismo: '#FFD60A',
          paternidad: '#2D6A4F',
          pastoral: '#7209B7'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'typewriter': 'typewriter 2s steps(40) 1s 1 normal both',
        'blinkTextCursor': 'blinkTextCursor 500ms infinite normal',
      },
      keyframes: {
        typewriter: {
          from: { width: '0' },
          to: { width: '100%' }
        },
        blinkTextCursor: {
          from: { 'border-right-color': 'rgba(255,255,255,.75)' },
          to: { 'border-right-color': 'transparent' }
        }
      }
    },
  },
  plugins: [],
}