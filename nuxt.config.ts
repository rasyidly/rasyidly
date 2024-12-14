// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  runtimeConfig: {
    public: {
      appName: process.env.APP_TITLE,
      appDescription: process.env.APP_DESCRIPTION,
      user: {
        avatar: process.env.USER_AVATAR,
        name: process.env.USER_NAME,
        fullName: process.env.USER_FULL_NAME,
        email: process.env.USER_EMAIL
      }
    }
  },
  modules: ['@nuxt/ui', '@nuxt/fonts', '@nuxt/content'],
  app: {
    pageTransition: { name: 'fade', mode: 'out-in' },
    layoutTransition: { name: 'fade', mode: 'out-in' }
  },
  fonts: {
    families: [
      { name: 'Onest', provider: 'google' },
    ]
  },
})