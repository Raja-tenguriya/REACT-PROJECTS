/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        skyblue: "#4077efff",
        slategray: "#64748B",
        coral: "#e25a5aff",
        tealish: "#3f867eff",
        indigoish: "#6366F1",
      },
    },
  },
  plugins: [],
};
