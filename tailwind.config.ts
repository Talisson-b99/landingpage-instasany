import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "green-primary": "#1D3531",
        "green-light": "#5D8A83",
        "green-dark": "#2A4B46",
        "green-neon": "#CCEC60",
      },
      maxWidth: {
        container: "77.5rem",
      },

      backgroundImage: {
        hero: `url('/bg-hero.svg')`,
      },
    },
  },
  plugins: [],
};
export default config;
