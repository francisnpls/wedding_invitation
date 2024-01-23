/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#b1a35c",
        secondary: "#8f7d25",
        darker: "#6a6423",
      },
      fontFamily: {
        alex: ["Alex Brush", "cursive"],
        royale: ["Bonheur Royale", "cursive"],
        greatvibes: ["Great Vibes", "cursive"],
        montserrat: ["Montserrat", "sans-serif"],
        alegria: ["Alegreya", "serif"],
      },
      backgroundImage: {
        marbleWhite: "url('/whiteBg.jpg')",
        plainWhite: "url('/whiteBg2.jpg')",
        flower: "url('/flower.jpg')",
        brownBg: "url('/brownflower.png')",
        greenBg: "url('/greenbg.jpg')",
        sunflower: "url('/lips.jpg')",
      }
    },
    screens: {
      xx: "380px",
      xs: "480px",
      ss: "620px",
      sm: "770px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}
