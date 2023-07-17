/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["montserrat", "sans-serif"],
        inter: ["inter", "sans-serif"],
      },
      colors: {
        "google-blue": "#4285F4",
        "google-red": "#DB4437",
        "google-yellow": "#F4B400",
        "google-green": "#0F9D58",
      },
      fontSize: {
        title: "192px",
      },
      animation: {
        text: "text 10s linear infinite",
        textsm: "text 30s linear infinite",
      },
      keyframes: {
        text: {
          "0%": {
            "background-position": "200% center",
          },
          "100%": {
            "background-position": "0 center",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
