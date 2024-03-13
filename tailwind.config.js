/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue':'#00246B',
        'custom':'#CADCFC',
      //  "custom-blue" :"#735DA5",
      //  "custom"  :"#D3C5E5",

      },
    },
  },
  plugins: [],
}

