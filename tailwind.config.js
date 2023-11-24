/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter", "sans-serif"],
        comforter: ["comforter", "sans-serif"],
        monteserrat: ["montserrat", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
