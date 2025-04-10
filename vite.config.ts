import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my-react-project/', // MUST match your repo name exactly
  build: {
    outDir: 'dist',
    sourcemap: true, // Helps with debugging
    chunkSizeWarningLimit: 1600, // Avoids build warnings
  },
  server: {
    open: true // Auto-opens browser on dev
  }
});