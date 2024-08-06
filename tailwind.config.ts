import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        temoignage: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)'},
        },
        partenaire: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-200%)'},
        },
      },
      animation: {
        temoignage: 'temoignage 30s linear infinite',
        partenaire:'partenaire 5s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
