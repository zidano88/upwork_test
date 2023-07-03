/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#FCBB58",
        red: "#F95F62",
        purple: {
          light: "#6160F3",
          DEFAULT: "#1D1D49",
        },
        blue: {
          light: "#00A6FF",
          dark: "#0E45A1",
        },
      },
    },
  },
  plugins: [],
};
