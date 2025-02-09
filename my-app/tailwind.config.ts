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
        dark: "#14171a",
        green: "#43de78",
        lightGray: "#f5f6fc",
      },
      maxHeight: {
        "0": "0",
        "screen": "100vh", // Default
        "custom": "1000px", // Custom max height for smooth animation
      },
    },
  },
  plugins: [],
};
export default config;
