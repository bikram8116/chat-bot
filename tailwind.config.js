/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0073E6", // Update to match your design
        lightGray: "#F5F7FB",
        darkGray: "#7E7E7E",
        hoverGray: "#E5E7EB",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Add your font family
      },
    },
  },
  plugins: [],
};




