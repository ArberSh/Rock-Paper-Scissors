/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateY(0) rotate(90deg)' },
          '25%': { transform: 'translateY(-10px) rotate(100deg)' },
          '75%': { transform: 'translateY(10px) rotate(80deg)' }
        }
      },
      animation: {
        shake: 'shake 0.5s infinite'
      }
    },
  },
  plugins: [],
}
