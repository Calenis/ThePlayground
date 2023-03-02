// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr : false,
  css: [
    'vuetify/lib/styles/main.sass', 
    '@mdi/font/css/materialdesignicons.min.css',
   /*'@ionic/core/css/core.css',
    '@ionic/core/css/normalize.css',
    '@ionic/core/css/structure.css',
    '@ionic/core/css/typography.css',
    '@ionic/core/css/ionic.bundle.css'
    */
  ],
  build: {
    transpile: ['vuetify'],
  }, 

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/supabase'
],

  vite: {
    server: {
      watch: {
        usePolling: true
      }
    },
    build: {
      target: 'esnext'
    }
    }
  }
)