import { defineConfig } from 'vite'
import path from 'path'
import eslintPlugin from 'vite-plugin-eslint'
import viteStylelint from '@amatlash/vite-plugin-stylelint'
import reactRefresh from '@vitejs/plugin-react-refresh'

function resolve(relativePath: string) {
  return path.resolve(__dirname, relativePath)
}

// https://vitejs.dev/config/
export default defineConfig({
  // 部署的前缀
  base: 'https://col0ring.github.io/vite-react-start-template/',
  plugins: [
    reactRefresh(),
    eslintPlugin({
      fix: true,
      include: ['./src/**/*.[tj]s?(x)'],
    }),
    viteStylelint({
      include: './src/**/*.(less|scss|css)',
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve('./src'),
    },
  },
})
