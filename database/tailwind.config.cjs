/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      open: ["Open Sans", "sans-serif"],
    },
    extend: {},
    colors: {
      header: "#2A2532",
      white: "#ffffff",
      green: "#2B641A",
    },
  },
  plugins: [],
};
