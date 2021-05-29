const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.ts', './src/**/*.tsx'],
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
