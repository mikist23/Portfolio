import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Specify the desired port number here
    open: true, // Automatically open the application in the browser
  },
  build: {
    outDir: 'dist', // Specify the output directory for the production build
    sourcemap: true, // Generate source maps for easier debugging
  },
});
