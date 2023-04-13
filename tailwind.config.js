/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      colors:{
        brand:'#F67828',
      },
      backgroundImage:{
        banner:`url('../public/image/배너.png')`
      }
    },
  },
  plugins: [],
}

