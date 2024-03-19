<script setup lang="ts">

interface NavLinkProps {
  title: string
  url: string  
}

const navigationLinks = ref<NavLinkProps[]>([
  { url: '/', title: 'Index' },
  { url: '/info', title: 'Info' },
])

const isDevelopment = import.meta.env.MODE === 'development'  

</script>

<template>
  <header class="header">
    <nav class="header__nav nav">
      <div class="nav__left">
        <div class="header__logo">Untitled</div>
        <ul class="nav__links">
          <li v-for="link in navigationLinks" :key="link.url">
            <NuxtLink class="nav-link" :to="link.url">{{ link.title }}</NuxtLink>
          </li>
          <li v-if="isDevelopment">
            <a href="http://localhost:3333" target="_blank">Studio</a>
          </li>
        </ul>
      </div>
      

      <div class="nav__right">
        <p>{{ new Date().getFullYear() }}</p>
      </div> 
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  // backdrop-filter: blur(32px) saturate(500%);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  &__left {
    display: flex;
    gap: 1rem
  }

  &__links {
    display: flex;
    align-items: center;
    gap: 1rem;
    // left: 7%;
  }
}

.nav-link {
  color: rgba(0, 0, 0, .5);
  text-decoration: none;
  position: relative;
  transition: all .3s ease;
  

  &:hover {
    color: #111111b8;
    transition: all .3s ease;
  }

  &:hover:after {
    width: 100%;
    transition: all .3s ease;
  }

  &::before {
    content: '';
    position: absolute;
    bottom: .2rem;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: rgba(0, 0, 0, .1)
  }

  &::after {
    content: '';
    position: absolute;
    bottom: .2rem;
    left: 0;
    width: 0%;
    height: 1px;
    background-color: rgba(0, 0, 0, 1);
    transition: all .3s ease;
  }

  &.router-link-active {
    color: #111;
    
    &:after {
      content: '';
      position: absolute;
      bottom: .2rem;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: rgba(0, 0, 0, 1);
      transition: all .3s ease;
    }
  }

  
}

.posts {
  margin-top: 2rem;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid #ededed;
  overflow: hidden;
  
  
  border-radius: 1rem;
  width: 480px;
  background-color: #fff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, .1);
}

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