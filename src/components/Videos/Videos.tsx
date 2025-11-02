import React from 'react'
import { Button } from '@/components/ui/button'
import './Videos.scss'
import '@/styles/sections.scss'

const featuredVideos = [
  {
    id: 1,
    title: 'Finding Your Voice',
    description: 'Short talk on discovering your writerly voice and keeping it true.',
    thumbnail: '/images/video-1.jpg',
    url: 'https://www.youtube.com/watch?v=VIDEO_ID_1',
    duration: '8:12'
  },
  {
    id: 2,
    title: 'Writing Routine',
    description: 'A realistic daily routine that helps you actually finish drafts.',
    thumbnail: '/images/video-2.jpg',
    url: 'https://www.youtube.com/watch?v=VIDEO_ID_2',
    duration: '12:04'
  },
  {
    id: 3,
    title: 'Editing Tips',
    description: 'Practical editing habits that improve clarity and flow.',
    thumbnail: '/images/video-3.jpg',
    url: 'https://www.youtube.com/watch?v=VIDEO_ID_3',
    duration: '6:30'
  }
]

const Videos: React.FC = () => {
  return (
    <section id="featured-videos" className="videos-section">
      <div className="container">
        <h2 className="section-title">Featured Videos</h2>
        <p className="section-subtitle">Short videos on writing, craft, and the creative process.</p>

        <div className="videos-grid">
          {featuredVideos.map((v) => (
            <article key={v.id} className="video-card">
              <div className="thumb-wrap">
                <img src={v.thumbnail} alt={`Thumbnail for ${v.title}`} className="thumb" />
                <span className="video-duration">{v.duration}</span>
              </div>

              <div className="video-info">
                <h3 className="video-title">{v.title}</h3>
                <p className="video-desc">{v.description}</p>
                <div className="video-cta">
                  <Button variant="default" asChild>
                    <a href={v.url} target="_blank" rel="noreferrer">Watch</a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="videos-cta">
          <Button variant="outline" asChild>
            <a href="#watch-videos">View all videos</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Videos
