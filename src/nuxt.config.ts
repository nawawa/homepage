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
  build: {
    transpile: ["vuetify"]
  },
  vite: {
      define: {
          "process.env.DEBUG": false
      }
  },
})
