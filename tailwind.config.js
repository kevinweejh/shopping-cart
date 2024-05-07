/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');
const pseudoElements = require('tailwindcss-pseudo-elements');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    pseudoElements({
      // options
    }),
    plugin(function ({ addUtilities }) {
      addUtilities(
        {
          '.no-spinners::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0,
          },
          '.no-spinners::-webkit-outer-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0,
          },
          '.no-spinners': {
            '-moz-appearance': 'textfield',
          },
        },
        ['responsive'],
      );
    }),
  ],
};
