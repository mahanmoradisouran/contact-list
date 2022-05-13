module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        // scale-0
        fadeShow: {
          "0%": { opacity: 0, transform: "scale(0.5)" },
          "100%": { opacity: 100, transform: "scale(1)" },
        },
        fadeHide: {
          "100%": { opacity: 0, transform: "scale(0.5)" },
        },
      },
      animation: {
        fadeShow: "fadeShow 300ms ease-in-out",
        fadeHide: "fadeHide 1000ms ease-in-out",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
