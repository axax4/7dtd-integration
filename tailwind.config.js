const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.tsx']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
        lightBlue: colors.lightBlue,
      },
    },
  },
  variants: {},
  plugins: [],
}
