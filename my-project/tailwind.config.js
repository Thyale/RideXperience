/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode : 'class',
  theme: {
    colors:{
      White: '#ffffff',
      Black: '#000000',
      WhiteTransparent : 'rgba(255, 255, 255, 0.541)',
      BlackTransparent : 'rgba(0, 0, 0, 0.581)',
      BgLoginBlack : '#0b0d11',
      BgLoginRed : '#2e191b',
      Puple: '#B72EF2',
      Yellow: '#F2CB05',
      Blue : '#0554F2',
      Orange:  '#F27D16'
    },
    screens: {
      'mobile': {'max': '639px'},
    },
    extend: {},
  },

  plugins: [],
}

