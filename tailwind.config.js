/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#99582A",
        secondary: "#BB9457",
        accent: "#FFE6A7",
        dark: "#160602",
        lightText: "#FFE6A7",
        mutedText: "#A1A1A1",
      },
      fontFamily: {
        IranianSans: ["IranianSans", "IranianSans"],
      },
    },
  },
  plugins: [],
};
