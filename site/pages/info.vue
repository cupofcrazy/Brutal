<template>
  <div id="index">
    <h1>{{ info.title }}</h1>
    <BlockContent :content="info.content" />
  </div>
</template>

<script setup lang="ts">
import { aboutQuery } from '~/lib/sanity/queries';

type Post = {
  title: string
  mainImage: string,
  body: any
}
const info = ref<any>(null)
const { data} = await useAsyncData('info', () => useSanity().fetch<{ info: any }>(aboutQuery))

// useMounted
info.value = data.value

</script> 

<style lang="scss" scoped>
img {
  width: 200px;
}
</style>