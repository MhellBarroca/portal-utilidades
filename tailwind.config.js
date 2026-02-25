/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",   // azul principal
        secondary: "#16a34a", // verde
        danger: "#dc2626",    // vermelho
        background: "#f9fafb",
        surface: "#ffffff",
        muted: "#6b7280",
      },
    },
  },
  plugins: [],
};