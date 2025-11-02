import { useParams } from 'react-router-dom'
import { videos } from '@/data/videos'
import { Button } from '@/components/ui/button'
import './Video.scss'

const VideoPage = () => {
  const { id } = useParams<{ id: string }>()
  const video = videos.find((v) => v.id === id)

  if (!video) {
    return (
      <div className="video-page">
        <main className="video-main container">
          <p>Video not found.</p>
        </main>
      </div>
    )
  }

  return (
    <div className="video-page">
      <main className="video-main container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="video-player-container aspect-video bg-black mb-6">
            {/* Video player placeholder - replace with actual video player component */}
            <div className="w-full h-full flex items-center justify-center text-white">
              Video Player
            </div>
          </div>

          <div className="video-content">
            <h1 className="text-3xl font-bold mb-2">{video.title}</h1>
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">
                {video.category}
              </span>
              <span className="text-gray-600">
                Duration: {video.duration}
              </span>
            </div>

            <div className="prose max-w-none">
              <p className="text-gray-700">{video.description}</p>
            </div>

            <div className="mt-6">
              <Button size="lg">
                Download Resources
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default VideoPage