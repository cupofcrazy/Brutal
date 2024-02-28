<template>
  <div class="slideshow" ref="slideshow">
    <div class="slideshow__wrapper" @click="increment">
      <img v-for="(image, index) in props.content.images" :style="{ display: currentSlide === index ? 'block' : 'none' }" class="slideshow__slide slide" :src="$urlFor(image.image).url()" alt="Hello">
    </div>
    <div class="dots">
      <button 
        @click="currentSlide = index" 
        :class="{ dot: true, active: currentSlide === index }" 
        v-for="(image, index) in props.content.images" :key="index"></button>
    </div>

  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ content: any }>()
const currentSlide = ref(0)
const slides = ref(props.content.images)

const slideshow = ref(null)

const increment = () => {
  (currentSlide.value = currentSlide.value + 1) % slides.value.length
}
</script>

<style lang="scss" scoped>
.slideshow {
  position: relative;
  margin: 1rem 0;

  img {
    aspect-ratio: 4/3;
    object-fit: cover;
  }
  
}

.slide {
  border-radius: .5rem;
}

.dots {
  margin: 1rem;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: .5rem;
  padding: .5rem;
  background-color: rgba(0, 0, 0, .25);
  border-radius: 10rem;
  backdrop-filter: blur(10px) saturate(2);
  
}

.dot {
  display: block;
  width: 8px;
  height: 8px;
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 10rem;
  transition: width .3s ease;
  border: 0;
  cursor: pointer;

  &.active {
    width: 16px;
    background-color: rgba(255, 255, 255, 0.75);
  }

}
</style>