import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' usa rutas relativas: la app funciona en local y en GitHub Pages
// sin importar el nombre del repositorio.
export default defineConfig({
  base: './',
  plugins: [react()],
})
