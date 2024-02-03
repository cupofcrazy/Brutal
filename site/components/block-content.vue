<template>
 <div class="block-content">
  <PortableText :value="props.content" :components="components" />
 </div>
</template>

<script setup lang="tsx">
// import Slideshow from '@/components/slideshow.vue';
import { PortableText } from '@portabletext/vue'
import Slideshow from './slideshow.vue';

const props = defineProps<{ content: any }>()
const app = useNuxtApp()

const components = {
  types: {
    image: ({ value }: any) => {
      return h('img', {
        class: 'block-content__img',
        src: app.$urlFor(value).url()
      })
    },
    slideshow: ({ value }: any) =>  h(Slideshow, { content: value })
  },
  marks: {
    link: ({ value }: any, { slots }: any) => {
      return h('a', {
        href: value.href,
        class: 'block-content__link',
        target: 'blank',
       
      }, slots.default?.())
    }
  }
}
</script>

<style lang="scss">
.block-content {
  p {
    margin: 1rem 0;
  }

  &__link {
    // font-style: italic;
    color: rgba(0, 0, 0, .5);
    text-decoration: underline;
    position: relative;
    transition: all .3s ease;

    &:hover {
      color: #111111;
      
      transition: all .3s ease;
    }
  }

  &__img {
    margin: 0 auto;
    width: 33.3%;
    // aspect-ratio: 1;
    object-fit: cover;

  }
}

</style>