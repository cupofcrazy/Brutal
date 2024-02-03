// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      title: process.env.SITE_NAME || 'Hello World',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
        { rel: "manifest", href: "/site.webmanifest" }
      ]
    }
  },
  image: {
    sanity: {
      projectId: process.env.SANITY_PROJECT_ID
    }
  },
  modules: [
    "@vueuse/nuxt",
    '@nuxt/image',
    '@pinia/nuxt',
    '@nuxtjs/sanity'
  ],
  sanity: {
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: 'production'
  }
})
