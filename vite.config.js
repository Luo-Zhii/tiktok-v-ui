import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import rewriteAll from 'vite-plugin-rewrite-all';

export default defineConfig({
  base: '/tiktok-v-ui/',
  plugins: [react(), rewriteAll()],
});
