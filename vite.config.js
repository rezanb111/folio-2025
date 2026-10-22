import 'dotenv/config'
import wasm from 'vite-plugin-wasm'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default {
    root: 'sources/',
    envDir: '../',
    publicDir: '../static/',
    base: './',
    server: {
        host: true,
        open: false
    },
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        sourcemap: false,
        target: 'esnext',
        chunkSizeWarningLimit: 5000
    },
    plugins: [
        wasm(),
        nodePolyfills()
    ],
    optimizeDeps: {
        exclude: ['@dimforge/rapier3d']
    }
}
