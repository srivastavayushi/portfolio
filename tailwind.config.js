const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      custom: ["fira-code", "sans-serif"],
    },
    // colors: {
    //   transparent: "transparent",
    //   current: "currentColor",
    //   green: {
    //     DEFAULT: "#64FFDA",
    //   },
    //   gray: {
    //     light: "#8892B0",
    //     dark: "#CCD7F6",
    //   },
    // },
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
