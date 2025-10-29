
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Roboto','Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        'orange': {
          500: '#FF7143',
          600: '#e55a2e',
        }
      },
      perspective: {
        '1000': '1000px',
      }
    },
  },
  plugins: [],
}