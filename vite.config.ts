import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
import compression from 'vite-plugin-compression'
import { createHtmlPlugin } from 'vite-plugin-html'

const isProd = process.env.NODE_ENV === 'production'

export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: 'brotliCompress',
      ext: 'br',
    }),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: 'Fedor Chernin',
        },
      },
    }),
    // Bundle analyzer - open on demand with --analyze flag
    isProd &&
      process.env.ANALYZE &&
      visualizer({
        open: true,
        filename: 'dist/stats.html',
        gzipSize: true,
        brotliSize: true,
      }),
  ].filter(Boolean),

  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },

  css: {
    modules: {
      localsConvention: 'camelCase',
      generateScopedName: isProd ? '[hash:base64:8]' : '[local]_[hash:base64:5]',
    },
    devSourcemap: true,
  },

  build: {
    cssMinify: 'lightningcss',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: isProd,
        drop_debugger: isProd,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'style-vendor': ['@fontsource/inter', '@fontsource/jetbrains-mono'],
        },
      },
    },
    sourcemap: !isProd,
    reportCompressedSize: true,
    // Cloudflare has 25MB limit
    chunkSizeWarningLimit: 1000,
  },

  server: {
    port: 3000,
    open: true,
    hmr: {
      overlay: true,
    },
  },

  preview: {
    port: 3000,
    open: true,
  },
})
