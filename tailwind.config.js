import { defineConfig } from 'tailwindcss'

export default defineConfig({
  content:[
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: { 
        signature: ["'Great Vibes'", "cursive"], 
      },
    },
  },
});
