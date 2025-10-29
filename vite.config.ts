import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/A2.AI/',  // 👈 MUST match your repo name exactly
})
