import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    build: {
        lib: {
            entry: resolve(__dirname, 'src/hooks/index.js'),
            name: 'VUseCryptedRoute',
            fileName: (format) => `crypted-vue-route.${format}.js`,
        },
        rollupOptions: {
            external: ['vue', 'vue-router'],
            output: {
                // Provide global variables to use in the UMD build
                // Add external deps here
                globals: {
                    vue: 'Vue',
                    'vue-router': 'VueRouter'
                },
            },
        },
    },
})
