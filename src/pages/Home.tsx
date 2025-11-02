import React from 'react'
import Hero from '@/components/Hero/Hero'
import AboutJourney from '@/components/About/AboutJourney'
import Videos from '@/components/Videos/Videos'
import CTA from '@/components/CTA/CTA'
import FeaturedBooks from '@/components/FeaturedBooks/FeaturedBooks'
import { AnimatedSection } from '@/components/AnimatedSection'

const Home: React.FC = () => {
  return (
    <div className="page-wrapper">
      <main>
        <Hero />
        {/* Sections are provided as components with fade-in animations */}
        <AnimatedSection>
          <AboutJourney />
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <FeaturedBooks />
        </AnimatedSection>
        <AnimatedSection delay={0.3}>
          <Videos />
        </AnimatedSection>
        <AnimatedSection delay={0.4}>
          <CTA />
        </AnimatedSection>
      </main>
    </div>
  )
}

export default Home
