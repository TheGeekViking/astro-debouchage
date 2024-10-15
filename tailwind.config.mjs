import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./src/pages/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./src/components/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./src/layouts/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        blue: {
          50: "#f0f9ff",
          100: "#e0f3fe",
          200: "#b9e8fe",
          300: "#7cd6fd",
          400: "#36c3fa",
          500: "#0caceb",
          600: "#0092d5",
          700: "#016da3",
          800: "#065c86",
          900: "#0b4d6f",
          950: "#07314a",
        },
      },
    },
  },
  plugins: [],
};
