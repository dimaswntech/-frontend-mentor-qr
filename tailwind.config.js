/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'White': 'hsl(0, 0%, 100%)',
        'Lightgray': 'hsl(212, 45%, 89%)',
        'Grayishblue': 'hsl(220, 15%, 55%)',
        'Darkblue': 'hsl(218, 44%, 22%)',
      }
    },
  },
  plugins: [],
}
