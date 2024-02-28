import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // Primary
        "purple": "#854dff",
        "light-red": "#ff5757",
        // Neutral
        "off-white": "#f0f0f0",
        "light-grey": "#dbdbdb",
        "smokey-grey": "#716f6f",
        "off-black": "#141414",
      },
    },
    borderRadius: {
      'none': '0',
      'sm': '0.5rem',
      'md': '0.75rem',
      'lg': '1rem',
      'xl': '1.5rem',
      '2xl': '2rem',
      '3xl': '6rem',
      'full': '9999px',
      'large': '12px',
    }
  },
  plugins: [],
};
export default config;
