import themes from "./src/themes.js";
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontFamily: {
      sans: ["Manrope", "Open Sans"],
      body: ["Manrope"],
      display: ["Manrope"],
    },
    extend: {
      animation: {
        grow: "grow 300ms ease-in-out",
        blob: "blob 7s infinite",
      },
      keyframes: {
        grow: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(20px, -40px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 10px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes,
    darkTheme: "night",
  },
};
