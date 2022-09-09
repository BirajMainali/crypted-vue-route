import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/hooks/useCryptedRoute.js'),
            name: 'useCryptedRoute',
            fileName: (format) => `use-crypted-route.${format}.js`,
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                // Provide global variables to use in the UMD build
                // Add external deps here
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
