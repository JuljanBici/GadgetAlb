/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '700px',
      lg: '900px',
      xl: '1100px',
    },
    extend: {
    },
  },
  plugins: [],
  darkMode: "class",
}
