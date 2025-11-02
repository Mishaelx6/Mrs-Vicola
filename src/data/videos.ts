export interface Video {
  id: string
  title: string
  description: string
  thumbnailUrl: string
  videoUrl: string
  duration: string
  category: string
}

export const videos: Video[] = [
  {
    id: '1',
    title: 'Understanding Child Psychology',
    description: 'Learn the fundamentals of child psychology and how to better understand your child\'s behavior.',
    thumbnailUrl: '/images/videos/child-psychology.jpg',
    videoUrl: 'https://example.com/videos/child-psychology',
    duration: '45:30',
    category: 'Psychology'
  },
  {
    id: '2',
    title: 'Effective Parenting Techniques',
    description: 'Discover practical techniques for positive parenting and building strong relationships with your children.',
    thumbnailUrl: '/images/videos/parenting.jpg',
    videoUrl: 'https://example.com/videos/parenting',
    duration: '38:15',
    category: 'Parenting'
  },
  {
    id: '3',
    title: 'Child Development Stages',
    description: 'A comprehensive guide to understanding different stages of child development and what to expect.',
    thumbnailUrl: '/images/videos/development.jpg',
    videoUrl: 'https://example.com/videos/development',
    duration: '52:20',
    category: 'Development'
  }
]