/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "body-gray": "#f2f2fc",
        "aside-white": "#fdf9ff",
        "color-pink": "#ec1839",
        "color-navy": "#302E4D",
      },
    },
  },
  plugins: [],
};
