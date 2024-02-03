<template>
  <div>
    <p>Hello</p>
    <pre>{{ props.content.title }}</pre>
    <div class="slideshow">
      <img v-for="image in props.content.images" class="slideshow__slide slide" :src="$urlFor(image).url()" alt="Hello">
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ content: any }>()

onMounted(() => {
  console.log(props.content)
})
</script>

<style lang="scss" scoped>
.slideshow {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: .5rem
}

.slide {
  border-radius: .5rem;
}
</style>