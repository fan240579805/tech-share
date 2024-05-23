import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig(({ command }) => {
  const isBuild = command === 'build'
  const framework = isBuild ? process.env.FRAMEWORK : 'vue'

  if (isBuild) {
    console.log(`Building for ${framework} ========================================>`)
  }

  return {
    plugins: [vue(), svelte()],
    build: {
      outDir: `dist/${framework}-dist`,
      rollupOptions: {
        input: `src/${framework}/main.js`
      }
    }
  }
})