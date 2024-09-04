// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  alias:{
    // "@":resolve(__dirname,'/'),
    assets: "/<rootDir>/assets"
  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css'
        }
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js',
          tagPosition: 'bodyClose'
        }
      ]
    }
  },
  plugins: ['~/plugins/myPlugins.ts'],
  css:["~/assets/main.css"]
})
