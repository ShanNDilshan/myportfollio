/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: '#030014',
        accent: '#7042f8',
        cardBorder: '#2A0E61'
      },
      backgroundImage: {
        'welcome-gradient': 'linear-gradient(90deg,#e59cff 0%,#9cb2ff 100%)',
        'section-gradient': 'linear-gradient(90deg,#7c3aed 0%,#06b6d4 100%)'
      }
    }
  },
  plugins: []
}
