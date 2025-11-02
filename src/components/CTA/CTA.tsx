import React from 'react'
import { Button } from '@/components/ui/button'
import './CTA.scss'

const CTA: React.FC = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <h2 className="cta-title">Ready to Start Your Writing Journey?</h2>
        <p className="cta-description">
          Join our community of writers and storytellers. Get exclusive access to writing tips,
          workshops, and early access to new books.
        </p>
        <div className="cta-buttons">
          <Button variant="default" size="lg" asChild>
            <a href="#join-community">Join the Community</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default CTA