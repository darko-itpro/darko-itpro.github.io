/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'Consolas', 'monospace'],
      },
      colors: {
        amber: {
          500: '#EF9F27',
          600: '#BA7517',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
