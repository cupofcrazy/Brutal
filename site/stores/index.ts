export const useGlobalStore = defineStore('globalStore', () => {
  const title = ref('Hello World')
  const changeTitle = (to: string) => {
    title.value = to
  }
  const withDate = computed(() => {
    return title.value + " : " + new Date().getFullYear()
  })

  return {
    title,
    changeTitle,
    withDate
  }
})