/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors:{
        primaryBg:'#1F2833',
        btnColor:'#66FCF1',
        shadowColor:'#45A29E',
        textColor:'#C5C6C7',
        secondaryBg:"1B1B1B",
      },
    },
  },
  plugins: [],
}
