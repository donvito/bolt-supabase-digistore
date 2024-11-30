/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          50: 'var(--teal-50)',
          100: 'var(--teal-100)',
          500: 'var(--teal-500)',
          600: 'var(--teal-600)',
        },
      },
    },
  },
  plugins: [],
};
