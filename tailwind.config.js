const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // fontFamily: {
    //   custom: ["fira-code", "sans-serif"],
    // },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      navy: {
        DEFAULT: "#0a192f",
        light: "#112240",
        lightest: "#233554",
      },
      slate: {
        DEFAULT: "#8892b0",
        light: "#a8b2d1",
        lightest: "#ccd6f6",
      },
      white: {
        DEFAULT: "#e6f1ff",
      },
      green: {
        DEFAULT: "#64ffda",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, e, prefix, config }) {
      const newUtilities = {
        ".horizontal-tb": {
          writingMode: "horizontal-tb",
        },
        ".vertical-rl": {
          writingMode: "vertical-rl",
        },
        ".vertical-lr": {
          writingMode: "vertical-lr",
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
