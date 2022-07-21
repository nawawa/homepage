import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app:{
    head: {
      title: "My Site",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.png" },
      ],
    },
  },

  css: [
    "vuetify/lib/styles/main.sass",
    '@/assets/style/common.scss', 
  ],

  build: {
    transpile: ["vuetify"]
  },

  buildModules: [
    // @nuxtjs/google-fonts がNuxt3に未対応なようなので、イシューからコピったソースで使えるようにした
    // https://github.com/nuxt-community/google-fonts-module/issues/67#issuecomment-978852151
    ["./modules/fonts/index.ts", {
      families: {
        Montserrat: [400],
      },
    }]
  ],

  vite: {
    define: {
      'process.env.DEBUG': false
    },
    server: {
      watch: {
        usePolling: true
      }
    }
  }
})
