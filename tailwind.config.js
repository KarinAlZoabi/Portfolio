/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0D0D0D", // Soft dark background
        surface: "#1A1A1A", // Navbar/section background
        textLight: "#F3F4F6", // Light text
        textDark: "#1F2937", // Dark text
        primary: "#7C3AED", // Calm purple accent
        secondary: "#9F7AEA", // Softer purple
      },
    },
  },
  plugins: [], // This array should be empty after removing the plugin
};