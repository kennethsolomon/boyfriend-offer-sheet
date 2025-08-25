import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['boyfriend.kennethsolomon.com', 'localhost', '127.0.0.1'],
    host: true // Allow external connections
  }
})
