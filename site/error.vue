<template>
  <div>
    <p>An error {{ error.statusCode }} occured... </p>
    <pre>{{ error?.message }}</pre>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ error: any }>()
</script>

<style lang="scss" scoped>

</style>