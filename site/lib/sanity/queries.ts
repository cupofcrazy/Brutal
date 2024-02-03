export const homepageQuery = groq`
  *[_type == "home"][0]
`

export const aboutQuery = groq`
  *[_type == "about"][0]
`

export const pageQuery = groq`
  *[_type == "page"]
`

export const siteSettingsQuery = groq`
  *[_type == "settings"][0]
`