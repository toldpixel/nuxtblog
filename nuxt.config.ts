// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', "@nuxt/content"],
  colorMode: {
    classSuffix: ''
  },
  content: {
    highlight: {
      // Theme used in all color schemes.
      theme: {
        default: 'min-light',
        dark: 'min-dark'
      }
    }
  },
  css: ['~/assets/css/tailwind.css'],
})