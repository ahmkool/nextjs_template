import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'mobile': {'max': '1023px'},
      'desktop': {'min': '1024px'},
    },
    extend: {
      colors: {
        lightcyan: '#F9A825',
        gradientLeft: '#0F2027',
        gradientRight: '#2C5364',
      },
      animation: {
        scalepulse: "scalepulse 8s ease-in-out infinite",
        moveFade: "moveFade 2s linear infinite"
      },
      keyframes: {
        scalepulse: {
          '0%': { "scale": "1" },
         '50%': { "scale": "1.05" },
         '100%': { "scale": "1" },
        },
        moveFade: {
          '0%': { 
            opacity: "0",
            transform: "rotate(45deg) translate(-10px, -10px)",
          },
          '50%': { 
            opacity: "1",
          },
          '100%': {    
            opacity: "0",
            transform: "rotate(45deg) translate(10px, 10px)",
          }
        }
      },
   
    },
  },
  plugins: [],
};
export default config;
