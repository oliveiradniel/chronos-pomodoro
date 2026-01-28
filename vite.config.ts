import { defineConfig } from 'vite';

import { tanstackRouter } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
      generatedRouteTree: 'src/route-tree.gen.ts',
    }),
    react(),
    tailwindcss(),
  ],
  server: {
    host: '0.0.0.0',
  },
});
