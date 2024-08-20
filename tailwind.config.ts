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
        secondary4: 'rgb(var(--secondary-color4))',
        secondary4_60: 'rgb(var(--secondary-color4_60))',
      }, 
      height: {
        '500': '500px',
        '600': '600px',
        '590': '590px',
      },
      borderColor: {
        focus: '#000000',
      },
    },
  },
  plugins: [],
};
export default config;
