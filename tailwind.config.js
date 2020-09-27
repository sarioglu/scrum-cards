const production = process.env.NODE_ENV !== 'development'

module.exports = {
  purge: {
    enabled: production,
    mode: 'all',
    content: ['./**/**/*.html', './**/**/*.svelte'],

    options: {
      whitelistPatterns: [/svelte-/],
    },
  },

  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
