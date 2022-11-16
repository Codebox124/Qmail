/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'serif-look': [ 'Libre Baskerville' ],
       ' sans-look': ['Montserrat'],
        'same': ['Poppins'],
      },
      colors:{
        primary: '#F5F7FF',
        secondary: {
          100: '#FFf',
          200: '#e9ecef',
        }
      }

    },
  },
  plugins: [],
}
