<template>
  <div id="index">
    <h1>{{ info.title }}</h1>
    <BlockContent :content="info.content" />
    <!-- <pre>{{ data }}</pre> -->
  </div>
</template>

<script setup lang="ts">
type Post = {
  title: string
  mainImage: string,
  body: any
}
const query = groq`
  *[_type == "about"][0]
`
const info = ref<any>(null)
const { data} = await useAsyncData('info', () => useSanity().fetch<{ info: any }>(query))

// useMounted
info.value = data.value

</script> 

<style lang="scss" scoped>
img {
  width: 200px;
}
</style>