/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'campus0': "url('/assets/img/campus0.jpg')",
        'campus1': "url('/assets/img/campus1.jpg')",
        'campus2': "url('/assets/img/campus2.jpg')",
        'campus3': "url('/assets/img/campus3.jpg')",
      },
      animation: {
        'move-around': 'move-around 5s ease-in-out infinite',
        'scroll':'scroll 30s linear infinite reverse running',
        'scroll-pause':'scroll pause'
      },
      keyframes: {
        'move-around': {
          '0%': { 'background-position':'0 50%' },
          '50%': { 'background-position':'100% 50%' },
          '100%': { 'background-position':'0 50%' }
        },
        'scroll':{
          '0%': { 'transform':'translateX(-100%)' },
          '100%': { 'transform':'translateX(160%)' }
        }
      }
    },
  },
  plugins: [],
}