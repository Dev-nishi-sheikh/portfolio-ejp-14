import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages project sites are served from https://<user>.github.io/<repo>/,
// so the build needs that path as its base. On GitHub Actions the repo name is
// available in GITHUB_REPOSITORY (auto-detected); locally it falls back to "/".
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1]
const base = repo && !repo.endsWith('.github.io') ? `/${repo}/` : '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [
    react(),
    tailwindcss(),
  ],
})
