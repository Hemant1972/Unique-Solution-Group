/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        usgGold: "#D4AF37", // Unique Solution Group theme color
        usgDark: "#111827",
      }
    },
  },
  plugins: [],
}