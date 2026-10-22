import 'dotenv/config'
import wasm from 'vite-plugin-wasm'
import topLevelAwait from 'vite-plugin-top-level-await'
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
        chunkSizeWarningLimit: 5000
    },
    plugins: [
        wasm(),
        topLevelAwait(),
        nodePolyfills()
    ]
}
