import { Link } from 'react-router-dom'
import { books } from '@/data/books'
import { Button } from '@/components/ui/button'
import { AnimatedCard, AnimatedSection } from '@/components/AnimatedSection'

const Books = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <AnimatedSection>
        <h1 className="text-4xl font-bold mb-8">Our Books</h1>
      </AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book, index) => (
          <AnimatedCard key={book.id} delay={index * 0.1}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={book.coverImage} 
                alt={book.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{book.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">${book.price}</span>
                  <Link to={`/book/${book.id}`}>
                    <Button>View Details</Button>
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </div>
  )
}

export default Books