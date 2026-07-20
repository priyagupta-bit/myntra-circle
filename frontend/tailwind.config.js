/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
  colors: {
    primary: "#E79BA7",
    background: "#FFF9F8",
    cream: "#FFF5F0",
    softPink: "#F8DDE2",
    dark: "#2F2F2F",
    gray: "#767676",
    border: "#F0E7E2",

    success: "#B7D7C0",
    warning: "#FFE7B8",
    accent: "#D8C7F5",
  },

  fontFamily: {
    heading: ["Playfair Display", "serif"],
    body: ["Inter", "sans-serif"],
  },

  borderRadius: {
    xl2: "24px",
    xl3: "32px",
  },

  boxShadow: {
    card: "0 10px 30px rgba(0,0,0,0.06)",
    soft: "0 6px 20px rgba(0,0,0,0.04)",
  },
}
  },
  plugins: [],
};