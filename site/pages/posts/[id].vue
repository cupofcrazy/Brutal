<script setup lang="ts">
const query = groq`
  *[_type == "post" && slug.current == $slug][0] {
    author ->,
    ...
  }
`

const route = useRoute()
const { data } = await useAsyncData('post', () => useSanity().fetch<{ post: any }>(query, { slug: route.params.id}))
const post = ref<any>(null)

post.value = data.value

useHead({
  title: `${post.value.title} | UNTITLED`,
})

console.log(data)
</script>

<template>
  <div class="container">
    <div class="post">
      <div class="post__image-wrapper">
        <NuxtImg class="post__image" v-if="post?.mainImage" :src="$urlFor(post.mainImage).url()" alt="test"></NuxtImg>
        <p v-if="post.author" class="post__author">By {{ post?.author.name }}</p>
      </div>
      
      <div class="post__info">
        <p class="post__title">{{ post?.title }}</p>
        <p class="post__desc">{{ post.description }}</p>
      </div>
      <BlockContent :content="post?.body" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  margin: 10rem 0;
}

.post {
  max-width: 768px;
  margin: 0 auto;

  &__info {
    margin: 1rem 0;
  }

  &__title {
    font-size: 1.5rem;
    font-weight: 500;
  }

  &__author {
    color: #fff;
    font-weight: 500;
    position: absolute;
    bottom: 0;
    left: 0;
    margin: .8rem;
    padding: .4rem .8rem;
    background-color: #0000003f;
    backdrop-filter: blur(5px) saturate(2);
    border-radius: 8px;
  }

  &__desc {
    color: #7c7c7c;
    font-size: 1.25rem;
    line-height: 1;
  }

  &__image-wrapper {
    position: relative;
  }

  &__image  {
    width: 100%;
    aspect-ratio: 2/1;
    object-fit: cover;
    border-radius: 4px;
  }
}
</style>