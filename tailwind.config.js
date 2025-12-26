/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          gold: '#D4AF37',
          'dark-gold': '#B8941E',
          black: '#0A0A0A',
          'dark-gray': '#1A1A1A',
          'medium-gray': '#2A2A2A',
          white: '#FAFAFA',
          cream: '#F5F5DC',
        }
      },
      fontFamily: {
        'heading': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
