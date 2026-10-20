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
        host: true,
        open: false
    },
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        sourcemap: false,
        target: 'esnext'
    },
    assetsInclude: ['**/*.wasm'],
    optimizeDeps: {
        exclude: ['@dimforge/rapier3d']
    },
    plugins: [
        wasm(),
        topLevelAwait(),
        restart({ restart: [ '../static/**' ] }),
        nodePolyfills()
    ]
}
