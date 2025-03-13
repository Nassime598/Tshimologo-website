import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import {viteStaticCopy} from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [react(),
    viteStaticCopy({
    targets: [
      {
        src: 'CNAME', // Your CNAME file in the root
        dest: ''      // Copy to the dist folder
      }
    ]
  })
  ],
  base: '/', // Set this to your repository name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
