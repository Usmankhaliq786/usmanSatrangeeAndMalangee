/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        primary: "#9f172a",
        secondary: "#ed8900",
      },
      container:{
        center: true,
        padding:{
          Default: "1rem",
          sm: '3rem',
          
        }
      }
    },
  },
  plugins: [],
}

