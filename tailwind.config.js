/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
      colors: {
        // Dark Mode
        backgroundDark: "#1a1a1a",
        cardDark: "#262626",
        borderDark: "#404040",
        boxDark: "#404040",
        textDark1: "#fbfbfb",
        textDark2: "#d9d9d9",
        textDark3: "#a6a6a6",

        // Light Mode
        backgroundLight: "#f0f0f0",
        cardLight: "#fbfbfb",
        borderLight: "#dfdfdf",
        boxLight: "#dfdfdf",
        textLight1: "#262626",
        textLight2: "#666666",
        textLight3: "#8c8c8c",
      },
      screens: {
        xs: "550px",
        xxs: "400px",
      },
    },
  },
  plugins: [],
};
