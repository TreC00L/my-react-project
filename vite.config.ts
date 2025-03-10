import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Fix for GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/my-react-project/', // <-- Change this to your GitHub repo name
});
