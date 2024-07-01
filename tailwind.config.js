/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0b0b0b",
        card: "#191919",
        box: "#282828",
      },
      screens: {
        xs: "550px",
        xxs: "400px",
      },
    },
  },
  plugins: [],
};
