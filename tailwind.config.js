/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage:{
        'img-banner':"url('/images/img_banner.webp')",
      }
    },
  },
  plugins: [],
}

