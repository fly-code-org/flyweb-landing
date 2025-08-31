/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-lexend)", "sans-serif"], // Lexend as base
      },
      colors: {
        brand: {
          purple: "#A78BFA", // light purple
          pink: "#F9A8D4",   // light pink
        },
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(to right, #A78BFA, #F9A8D4)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"), // for smooth animations
    require('tailwind-scrollbar-hide'),

  ],
};
