import 'dotenv/config'
import restart from 'vite-plugin-restart'
import wasm from 'vite-plugin-wasm'
import topLevelAwait from 'vite-plugin-top-level-await'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default {
    root: 'sources/',
    envDir: '../',
    publicDir: '../static/',
    base: './',
    server: {
        host: '0.0.0.0',
        port: 5173,
        open: false,
        watch: {
            usePolling: true,
            interval: 1000
        }
    },
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        sourcemap: false,
        target: 'esnext',
        assetsInlineLimit: 0
    },
    assetsInclude: ['**/*.wasm'],
    optimizeDeps: {
        exclude: ['@dimforge/rapier3d']
    },
    plugins: [
        wasm(),
        topLevelAwait(),
        restart({ restart: [ '../static/**' ] }),
        nodePolyfills(),
    ]
}
