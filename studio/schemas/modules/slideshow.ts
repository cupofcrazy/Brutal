import { defineField, defineType } from "sanity";


export default defineType({
  name: 'slideshow',
  title: 'Slideshow',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'images',
      type: 'array',
      of: [
        { type: 'image' }
      ],
      options: {
        layout: 'grid'
      }
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'images',
      media: 'images[0].asset'
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: `Image Gallery(${subtitle.length < 2 ? `${subtitle.length} image` : `${subtitle.length} images`})`,
        media
      }
    }
  }
 
})