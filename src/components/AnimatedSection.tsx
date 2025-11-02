import { motion } from 'framer-motion'
import type { HTMLMotionProps } from 'framer-motion'
import { useInView } from '@/hooks/useInView'

interface AnimatedSectionProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  className?: string
  delay?: number
}

export const AnimatedSection = ({ 
  children, 
  className = '', 
  delay = 0,
  ...props 
}: AnimatedSectionProps) => {
  const [ref, isInView] = useInView()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export const AnimatedCard = ({ 
  children, 
  className = '', 
  delay = 0,
  ...props 
}: AnimatedSectionProps) => {
  const [ref, isInView] = useInView()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}