<script setup lang="ts">


useHead({
  title: 'UNTITLED | Index',
})

const imageQuery = groq`
  "image": image.asset->
`

type Post = {
  title: string
  mainImage: string,
  body: any
}
const query = groq`
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
const { data } = await useAsyncData('posts', () => useSanity().fetch<{ posts: Post[] }>(query))
const posts = ref<any>(null)
// @ts-ignore
posts.value = data.value

</script> 

<template>
  <div id="index">
    <ul>
      <li class="post" v-for="post in posts" :key="post.id">
        <NuxtLink :to="`/posts/${post.slug}`">
          <!-- <NuxtImg v-if="post?.mainImage" :src="$urlFor(post.mainImage.image).url()" alt="test"></NuxtImg> -->
          <AppImage class="img" :src="$urlFor(post.mainImage.image).url()"
            :alt="post.mainImage.alt"
            :aspect-ratio="1"
            :placeholder="$urlFor(post.mainImage.image)
            .width(30)
            .blur(30)
            .auto('format')
            .url()" />
          <p class="post__title">{{ post?.title }}</p>
          <p class="post__desc">{{ post.description }}</p>
      </NuxtLink>
      </li>
    </ul>
    <!-- <BlockContent :content="post?.body" /> -->
  </div>
</template>



<style lang="scss" scoped>
a {
  text-decoration: none;
}
ul {
  margin: 1rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: .5rem;
}

.post {
  &__title {
    color: #111;
    font-weight: 500;
  }

  &__desc {
    color: #7c7c7c;
    line-height: 1;
  }
}

.img  {
  width: 100%;
  // height: 100px;
  aspect-ratio: 4/3;
  object-fit: cover;
  border-radius: 4px;
}
</style>