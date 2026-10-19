import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // Vercel serves the site from the domain root ("/"), while GitHub Pages
  // serves it from "/portfolio-ejp-14/". Vercel sets VERCEL=1 on its builds,
  // and `command === 'serve'` is the local dev server.
  base: command === 'serve' || process.env.VERCEL ? '/' : '/portfolio-ejp-14/',
  plugins: [
    react(),
    tailwindcss(),
  ],
}))
