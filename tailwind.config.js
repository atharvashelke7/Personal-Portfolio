/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gmailBlue: "#4285F4",
        gmailDarkRed: "#C5221F",
        gmailRed: "#EA4335",
        gmailYellow: "#FBBC04",
        gmailGreen: "#34A853",
      },
    },
  },
  plugins: [require("daisyui")],
};
