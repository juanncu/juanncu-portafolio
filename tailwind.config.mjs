/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "terciary-color": "var(--terciary-color)",
        "green-lime": "var(--green-lime)",
        "color-text2": "var(--color-text2)",
      },
    },
    fontFamily: {
      syne: ["Syne Variable"],
    },
  },
  plugins: [],
};
