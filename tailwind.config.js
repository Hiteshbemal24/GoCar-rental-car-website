/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kalam: ["Kalam", "cursive"],
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        "primary-black": "#222",
        "light-gray": "#686868",
        "dark-gray": "#414141",
        "subtitle-gray": "#686868",
        "lightest-gray": "#F9F9F9",
        "accent-gray": "#E1E1E1",
        "secondary-gray": "#E4E4E4",
        "orange": "#FF6452",
        "accent-orange": "#FFA297",
        "secondary-orange": "#FFE0DC",
      },
      screens: {
        sm: "640px",
        xl: "1140px",
        lg: "900px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
});
