import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/digital-store/', // 👈 base igual ao nome do repositório
  plugins: [react()],
})
