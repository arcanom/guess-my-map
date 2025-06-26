/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // ← indispensable pour React
  ],
  theme: {
    extend: {    
      fontFamily: {
        fredoka: ['Fredoka', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],

      },
      colors: {
        customYellow: "#FEE89B",
        corailRed: "#F28C6A",
        buttonGreen: "#1EEB62"
      },
      },
  },
  plugins: [],
}
