/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screen: {
      lg: '980px'
    },
    extend: {
      fontFamily: {
        'raleway': ['Raleway']
      },
      padding: {
        '7.5': '1.875rem'
      },
      colors: {
        'primary': '#6C6C6C',
        'secondary': '#414141',
        'header-logo': '#E8E8E8',
        'header-text': '#efefef'
      }
    },
  },
  plugins: [],
}

