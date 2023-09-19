/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.html"],
  theme: {
    extend: {
      colors: {
        main_blue: "rgb(23, 0, 192)",
        light_blue: "rgb(75, 176, 255)",
        light_pink: "rgb(255, 130, 248)",
        main_pink: "rgb(255, 0, 102)",
        main_yellow: "rgb(255, 199, 0)",
      },
    },
  },
  plugins: [],
};



