/** @type {import('tailwindcss').Config} */
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
    },
  },
  plugins: [],
};
