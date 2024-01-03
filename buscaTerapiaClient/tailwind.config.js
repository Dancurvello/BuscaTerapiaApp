/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 8px 19px 4px rgba(0, 0, 0, 0.25)",
        "4xl": "0px 8px 20px 0px rgba(0, 0, 0, 0.10)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundColor: {
        fefffe: "#FEFEFE",
      },
      borderRadius: {
        30: "30px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".gradient-background": {
          background:
            "linear-gradient(90deg, rgba(212, 158, 255, 0.85) 12.47%, rgba(5, 175, 248, 0.85) 93.32%)",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
