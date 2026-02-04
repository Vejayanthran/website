/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#252523',
        yellow: '#ffcd42',
        accent: '#ffcd42',
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
}
