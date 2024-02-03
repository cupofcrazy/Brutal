interface SeoProps {
  title: string
}

export const useSeo = ({ title }: SeoProps) => {
  useHead({
    title: title
  })
}