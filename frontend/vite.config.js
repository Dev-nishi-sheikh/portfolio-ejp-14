import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves this project at https://<user>.github.io/portfolio-ejp-14/
  base: '/portfolio-ejp-14/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
