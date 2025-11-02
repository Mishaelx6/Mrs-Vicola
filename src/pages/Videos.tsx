import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { videos } from '@/data/videos'
import { Button } from '@/components/ui/button'
import './Videos.scss'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

const Videos = () => {
  return (
    <motion.div 
      className="container mx-auto px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Educational Videos
      </motion.h1>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
  {videos.map((video) => (
          <motion.div 
            key={video.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden video-card"
            variants={itemVariants}
            whileHover={{ 
              y: -10,
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            <motion.div className="relative">
              <motion.img 
                src={video.thumbnailUrl} 
                alt={video.title}
                className="w-full h-48 object-cover"
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.3 }
                }}
              />
              <motion.span 
                className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {video.duration}
              </motion.span>
            </motion.div>
            <motion.div 
              className="p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <motion.div 
                className="mb-2"
                whileHover={{ scale: 1.05 }}
              >
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  {video.category}
                </span>
              </motion.div>
              <motion.h3 
                className="text-xl font-semibold mb-2"
                whileHover={{ x: 5 }}
              >
                {video.title}
              </motion.h3>
              <motion.p className="text-gray-600 mb-4 line-clamp-2">
                {video.description}
              </motion.p>
              <Link to={`/video/${video.id}`}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button className="w-full">
                    Watch Video
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Videos