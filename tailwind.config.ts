import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        clinic: {
          green: {
            DEFAULT: "#1a6f5a",
            dark: "#134d3e",
            light: "#e8f5f0",
          },
          orange: {
            DEFAULT: "#e8520a",
            light: "#fff3ee",
          },
          yellow: "#f5a623",
        },
      },
      fontFamily: {
        sans: [
          '"Hiragino Kaku Gothic ProN"',
          '"Hiragino Sans"',
          "Meiryo",
          '"Yu Gothic"',
          "sans-serif",
        ],
      },
      keyframes: {
        "spotlight-float": {
          "0%, 100%": { transform: "translate(-5%, -5%)" },
          "50%": { transform: "translate(5%, 5%)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "spotlight-float": "spotlight-float 8s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
