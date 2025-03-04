import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ClosePlugin from './vite-plugin-close.js'

// https://vite.dev/config/
export default defineConfig({
  
  plugins: [react(),ClosePlugin()],
  build: {
    sourcemap: false,  // Disable source maps in production
  },

})
