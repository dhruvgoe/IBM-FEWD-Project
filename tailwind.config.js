/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textShadow: {
        sm: "1px 1px 1px rgba(0, 0, 0, 0.2)",
        md: "2px 2px 2px rgba(0, 0, 0, 0.4)",
        lg: "3px 3px 3px rgba(0, 0, 0, 0.6)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".text-shadow-sm": {
            textShadow: "1px 1px 1px rgba(0, 0, 0, 0.2)",
          },
          ".text-shadow-md": {
            textShadow: "2px 2px 2px rgba(0, 0, 0, 0.4)",
          },
          ".text-shadow-lg": {
            textShadow: "3px 3px 3px rgba(0, 0, 0, 0.6)",
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
