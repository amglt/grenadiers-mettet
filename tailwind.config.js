/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      'tablet': '768px',
      'desktop': '1280px'
    },
    extend: {
      fontFamily: {
        'raleway': ['Raleway'],
        'montserrat': ['Montserrat']
      },
      padding: {
        '7.5': '1.875rem'
      },
      colors: {
        'primary': '#6C6C6C',
        'secondary': '#414141',
        'header-logo': '#E8E8E8',
        'header-text': '#EFEFEF',
        'top-title-text': '#F4F4F4'
      },
      borderWidth:{
        1: '1px'
      },
      lineHeight: {
        5.5: '1.375rem'
      },
      backgroundImage: {
        'header': "url('/img/header-background.jpg')"
      }
    },
  },
  plugins: [],
}

