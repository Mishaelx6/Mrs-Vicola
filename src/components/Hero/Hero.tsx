import React from 'react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import './Hero.scss'
import '@/styles/sections.scss'

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            damping: 12,
            stiffness: 100,
            duration: 1
          }}
        >
          <motion.h1 
            className="hero-title text-gray-800"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              damping: 8,
              stiffness: 100,
              delay: 0.2
            }}
          >
            Inspire. Write. Create.
          </motion.h1>
          <motion.p 
            className="hero-subtitle text-gray-600"
            initial={{ y: -30 }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              damping: 8,
              stiffness: 100,
              delay: 0.3
            }}
          >
            Stories, essays, and thoughtful videos from Mrs Vicola writer & content creator.
          </motion.p>

          <motion.div 
            className="hero-cta"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{
              type: "spring",
              damping: 8,
              stiffness: 100,
              delay: 0.4,
              bounce: 0.3
            }}
          >
            <Button variant="default" asChild>
              <a href="/books">Explore Books</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#featured-videos">Watch Videos</a>
            </Button>
          </motion.div>
        </motion.div>

        <div className="hero-images">
          <img src="/images/hero-portrait.svg" alt="Mrs Vicola portrait" className="hero-portrait" />
          <img src="/images/hero-ornament.svg" alt="Decorative background" className="hero-ornament" />
        </div>
      </div>
    </section>
  )
}

export default Hero
