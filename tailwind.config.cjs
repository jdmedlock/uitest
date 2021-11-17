module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        'xl': '1.0rem',
      },
      scale: {
        '0': '0',
        '25': '.25',
        '50': '.5',
        '75': '.75',
        '90': '.9',
        '95': '.95',
        '100': '1',
        '105': '1.05',
        '110': '1.1',
        '125': '1.25',
        '150': '1.5',
        '200': '2',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  mode: 'jit', // ⚠ Make sure to have this
  purge: ["./src/**/*.svelte"],
}
