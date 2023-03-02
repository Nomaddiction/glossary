/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        header: "#2A2532",
        green: "#2B641A",
      },
      gap: {
        6.5: "1.875rem",
        4: "1rem",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        open: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
