import React from 'react'
import { Button } from '@/components/ui/button'
import './AboutJourney.scss'
import '@/styles/sections.scss'

const AboutJourney: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content centered">
          <h2 className="about-title">The Journey</h2>
          <p className="about-text">
            Mrs Vicola began as a lover of stories and a quiet observer of life.
            Over the years she turned thoughts into essays, essays into books,
            and books into conversations with readers around the world. Her
            work explores the small, human moments that shape our days from
            family and memory to the everyday rituals of creating.
          </p>

          <div className="about-cta">
            <Button variant="default">Read more</Button>
            <Button variant="outline">Contact</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutJourney
