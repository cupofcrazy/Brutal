<template>
  <li class="post-item" >
    <NuxtLink :to="`/posts/${post.slug.current}`" disabled="true">
      <NuxtImg class="post-item__image" v-if="post?.mainImage" :src="$urlFor(post.mainImage).url()" alt="test"></NuxtImg>
      <div class="post-item__info">
        <p class="post-item__title">{{ post?.title }}</p>
        <p class="post-item__desc">{{ post?.description }}</p>
      </div>
      
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">

type PostListItemProps = {
  post: any
}
const { post } = defineProps<PostListItemProps>()

</script>

<style lang="scss" scoped>
.post-item {
  
  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.05)
  }
  a {
    display: flex;
    align-items: flex-start;
    gap: .5rem;
    padding: .75rem;
    

    &:hover {
      background-color: rgba(0, 0, 0, .025);
    }
  }

  &__info {
    overflow: hidden;
  }

  &__title {}
  &__desc {
    color: rgba(0, 0, 0, .5);
    text-overflow: ellipsis;
    white-space: nowrap; /* keeps the text in a single line */
    overflow: hidden;
  }

  &__image {
    width: 64px;
    aspect-ratio: 4/3;
    object-fit: cover;
    border-radius: 4px;
  }
}
</style>