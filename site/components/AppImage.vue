<script setup lang="ts">
const props = withDefaults(defineProps<{ aspectRatio: number | string }>(), {
  aspectRatio: 4 / 3
})

defineOptions({
  inheritAttrs: false
})
</script>

<template>
  <div class="image-wrapper">
    <NuxtImg class="image" v-bind="$attrs" :style="{ aspectRatio: props.aspectRatio }" />
  </div>
</template>

<style lang="scss" scoped>
.image-wrapper {
  border-radius: 4px;
  overflow: hidden;
}
.image {
  width: 100%;
  // height: 100px;
  // aspect-ratio: 4/3;
  object-fit: cover;
  
}
</style>