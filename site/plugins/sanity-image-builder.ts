import imageUrlBuilder from '@sanity/image-url'

export default defineNuxtPlugin(() => {
  const builder = imageUrlBuilder(useSanity().config)
  const urlFor = (source: string) => builder.image(source).auto('format')
  return {
    provide: { urlFor }
  }
})