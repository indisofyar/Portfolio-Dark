/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{vue,html,js}', './public/index.html'],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['inter', 'ui-sans-serif', 'system-ui'],
      'serif': ['Cormorant Garamond','ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
    }
  },
  plugins: [],
}

