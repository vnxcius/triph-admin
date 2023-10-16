/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gradient-1': '#fbf7ff',
        'gradient-2': '#f5e3ff',
        'accent': '#8E37F2',
      },
      fontFamily: {
        'sourcesans': ["'Source Sans 3', 'sans-serif'"],
      },
    },
  },
  plugins: [],
}

