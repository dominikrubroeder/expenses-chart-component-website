/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'app-sand': '#F7E9DC',
        'app-orange': '#EC755D',
        'app-teal': '#76B5BC',
      },
      animation: {
        growHeight: 'growHeight 1s ease-out forwards',
        growWidth: 'growWidth 1s ease-out forwards',
        fadeUp: 'fadeUp .6s ease-out forwards',
        fadeDown: 'fadeDown .6s ease-out forwards',
        fadeToRight: 'fadeToRight .6s ease-out forwards',
        fadeToLeft: 'fadeToLeft .6s ease-out forwards',
        scale: 'scale .6s ease-out forwards',
      },
      keyframes: {
        growHeight: {
          '0%': { height: '0%' },
          '100%': { transform: '100%' },
        },
        growWidth: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        fadeUp: {
          '0%': {
            transform: 'translateY(60%)',
            opacity: '0%',
            visibility: 'hidden',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '100%',
            visibility: 'visible',
          },
        },
        fadeDown: {
          '0%': {
            transform: 'translateY(-60%)',
            opacity: '0%',
            visibility: 'hidden',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '100%',
            visibility: 'visible',
          },
        },
        fadeToRight: {
          '0%': {
            transform: 'translateX(-30%)',
            opacity: '0%',
            visibility: 'hidden',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '100%',
            visibility: 'visible',
          },
        },
        fadeToLeft: {
          '0%': {
            transform: 'translateX(30%)',
            opacity: '0%',
            visibility: 'hidden',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '100%',
            visibility: 'visible',
          },
        },
        scale: {
          '0%': {
            transform: 'scale(0.7)',
            opacity: '0%',
            visibility: 'hidden',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '100%',
            visibility: 'visible',
          },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.animation-delay-1000': {
          'animation-delay': '1s',
        },
      });
    }),
  ],
};
