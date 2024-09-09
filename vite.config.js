import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@data': path.resolve(__dirname, './src/data'),
      '@helpers': path.resolve(__dirname, './src/helpers'),
      '@devPage': path.resolve(__dirname, './src/modules/devPage'),
      '@landingPage': path.resolve(__dirname, './src/modules/landingPage'),
      '@errorPage': path.resolve(__dirname, './src/modules/errorPage'),
      '@docPage': path.resolve(__dirname, './src/modules/docPage'),
      '@tilemapPage': path.resolve(__dirname, './src/modules/tilemapPage'),
      '@section': path.resolve(__dirname, './src/modules/section'),
    },
  }
})
