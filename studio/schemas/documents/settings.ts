import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      description: 'Default site title otherwise frontend changes',
      type: 'string'
    }),
    defineField({
      name: 'siteImage',
      title: 'Site Image',
      description: 'Cover image for the website',
      type: 'image',
      options: {
        hotspot: true
      }
    })
  ]
})