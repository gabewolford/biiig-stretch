/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'tan': '#F3E7E1',
      'dark-blue': '#18182A',
      'light-blue': '#88B9EF',
      'rust': '#BD4F18',
      'gold': '#90793E',
    },
    extend: {
    },
  },
  plugins: [],
}
