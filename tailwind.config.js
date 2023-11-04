/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        grey1: "#F3F3F4",
        textColor1: "#4f5e64",
        greenHome1: "#78C38C",
      },
    },
    animation: {
      "fade-out": "fade .5s ease-in-out ",
      ping: "ping 1.2s cubic-bezier(1, 0, 0, 1) infinite",
    },
    keyframes: {
      ping: {
        "70%, 100%": {
          transform: "scale(1.3)",
          opacity: 0,
        },
      },
      fade: {
        from: {
          transform: "scale(0)",
          opacity: 0,
        },
        to: {
          transform: "scale(1)",
          opacity: 1,
        },
      },
    },
  },
  plugins: [],
};

