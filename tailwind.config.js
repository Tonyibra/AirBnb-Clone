module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,jsx}", "./Components/**/*.jsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
