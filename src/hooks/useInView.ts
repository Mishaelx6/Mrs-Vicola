import { useEffect, useRef, useState } from 'react'

interface InViewOptions extends IntersectionObserverInit {}

export function useInView(options: InViewOptions = {}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const firstEntry = entries[0]
      if (firstEntry && firstEntry.isIntersecting) {
        setIsInView(true)
        if (ref.current) {
          observer.unobserve(ref.current)
        }
      }
    }, { threshold: 0.1, ...options })

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [options])

  return [ref, isInView] as const
}