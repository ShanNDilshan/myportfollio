/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Sora', 'ui-sans-serif', 'sans-serif'],
      },
      colors: {
        bg: '#04011a',
        primary: '#7c58fc',
        cyan: '#06e5d4',
        cardBorder: 'rgba(124,88,252,0.18)',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        float: 'float 4s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
