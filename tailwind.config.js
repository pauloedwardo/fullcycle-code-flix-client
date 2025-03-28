// @type {import('tailwindcss').Config}
module.exports = {
  content: [
    // './src/pages/**/*.{js,ts,jsx,tsx}',
    // './src/components/**/*.{js,ts,jsx,tsx}',
    // './src/app/page.tsx',  './src/app/**/*.{js,ts,jsx,tsx}'
    './src/app/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    textColor: {
      white: '#FFF'
    }
  },
  plugins: [
    // require('tailwind-scrollbar-hide'),
    // require('@vidstack/react/tailwind.cjs'),
  ],
};