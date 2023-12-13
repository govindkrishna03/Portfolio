/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)'],
        'denk': ['Denk One', 'sans-serif'],
        'default': ['Inter', 'Helvetica Neue', 'Helvetica', 'apple-system', 'sans-serif'],
        
      },
      colors:{
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", 
        primaryDark: "#58E6D9", 
        footerbg:"#F3EEEA"
      },
      fontWeight: {
        'regular': 400,
      },
    },
  },
  plugins: [],
}