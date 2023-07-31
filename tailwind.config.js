/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'tan': '#011026',
      'white': '#F3E7E1',
      'light-blue': '#88B9EF',
    },
    extend: {
    },
  },
  plugins: [],
}
