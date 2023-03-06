import { defineConfig } from 'vite'
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      find: '@/',
      replacement: path.resolve(__dirname, './src')
    }
  },
  build: {
    outDir: "build"
  },
  server: {
    strictPort: true,
    hmr: {
      port: 3000 // Run the websocket server on the SSL port
    }
  }
})
