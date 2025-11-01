import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.BASE_URL || '/',
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      'components': path.resolve(__dirname, './src/components'),
      'api': path.resolve(__dirname, './src/api'),
      'hooks': path.resolve(__dirname, './src/hooks'),
      'globalStyle': path.resolve(__dirname, './src/globalStyle.ts'),
    },
  },
})
