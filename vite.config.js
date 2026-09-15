import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    // Yksi worker-säie välttää tässä Windows-ympäristössä havaitun jumittumisen.
    pool: 'threads',
    maxWorkers: 1,
    environment: 'jsdom',
    setupFiles: './vitest.setup.js',
  },
});
