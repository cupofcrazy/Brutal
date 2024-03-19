export const homepageQuery = groq`
  *[_type == "home"][0]
`
const imageQuery = groq`
  "image": image.asset->
`

export const aboutQuery = groq`
  *[_type == "about"][0] {
    ...,
    content[] {
      ...,
      _type == "a11yImage" => {
        ${imageQuery}
      }
    }
  }
`

export const pageQuery = groq`
  *[_type == "page"]
`

export const postsQuery = groq`
  *[_type == "post"] {
    title,
    // "mainImage": mainImage.image.asset->,
    mainImage {
      ${imageQuery},
      alt,
    },
    description,
    "slug": slug.current,
  }
`

export const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    author ->,
    mainImage {
      ${imageQuery},
      alt,
    },
    "body": body[] {
      ...,
      _type == "a11yImage" => {
        ${imageQuery},
      }
    },
    
    ...
  }
`

export const siteSettingsQuery = groq`
  *[_type == "settings"][0]
`