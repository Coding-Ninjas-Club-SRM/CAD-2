/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      black: "#0B0A0A",
    },
    extend: {
      fontFamily: {
        pixeboy: ["Pixeboy"],
      },
      colors: {
        white: {
          off: "#f2f2f2",
        },
      },
      dropShadow: {
        white: "0px 4px 25px rgba(162, 162, 162, 0.1)",
        landingTitle: [
          // "0px 4px 50px #000000",
          "3px 10px 10px #743DFE",
        ],
      },
      fontSize: {
        "10xl": ["10rem", "0.75"],
        "11xl": ["13rem", "0.75"],
        "12xl": ["16rem", "0.75"],
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        "@font-face": {
          fontFamily: "Pixeboy",
          fontWheight: "400",
          src: "url(./Assets/fonts/Pixeboy.ttf)",
        },
      });
    }),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".text-shadow-landingTitle": {
          "text-shadow": ["0px 4px 50px #000000", "3px 10px 10px #743dfe"],
        },
        ".text-shadow-landingSubtitle": {
          "text-shadow": "0px 4px 4px #6C63FF",
        },
      });
    }),
  ],
};
