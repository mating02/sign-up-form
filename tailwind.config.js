/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'odinBg' : "url('https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80')",
        'odinLogo': "url('https://cdn.statically.io/gh/TheOdinProject/curriculum/5f37d43908ef92499e95a9b90fc3cc291a95014c/html_css/project-sign-up-form/odin-lined.png')"
      },
      fontFamily: {
        viking: ['Nordic', 'sans'],
        astro: ['modern','sans'] // Adds a new `font-display` class
      },
      colors: {
        'darknightblue': 'rgb(0, 0, 171)'
      },
      height: {
        'screen-2/5': '40vh',
        'screen-3/5': '30vh'
      },
      maxHeight: {
        'screen-2/5': '40vh'
      }
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      'full': '100% 100%'
    },
  },
  plugins: [],
}


