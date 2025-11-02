import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import './FeaturedBooks.scss';

interface Book {
  id: number;
  title: string;
  coverImage: string;
  price: number;
  description: string;
}

const FeaturedBooks: React.FC = () => {
  // Mock data - replace with actual data later
  const featuredBooks: Book[] = [
    {
      id: 1,
      title: "The Art of Storytelling",
      coverImage: "/images/book1.jpg",
      price: 29.99,
      description: "Discover the secrets of compelling narrative writing."
    },
    {
      id: 2,
      title: "Creative Writing Mastery",
      coverImage: "/images/book2.jpg",
      price: 24.99,
      description: "A comprehensive guide to mastering creative writing."
    },
    {
      id: 3,
      title: "Writing Your First Novel",
      coverImage: "/images/book3.jpg",
      price: 34.99,
      description: "Step-by-step guidance for aspiring novelists."
    }
  ];

  return (
    <section className="featured-books-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2>Featured Books</h2>
          <p>Explore my collection of books on writing and storytelling</p>
        </motion.div>

        <div className="books-grid">
          {featuredBooks.map((book, index) => (
            <motion.div
              key={book.id}
              className="book-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
            >
              <div className="book-cover">
                <img src={book.coverImage} alt={book.title} />
              </div>
              <div className="book-info">
                <h3>{book.title}</h3>
                <p>{book.description}</p>
                <div className="book-price">${book.price}</div>
                <Button variant="default" className="view-details-btn" asChild>
                  <a href={`/books/${book.id}`}>View Details</a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="view-all-books"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button variant="outline" size="lg" asChild>
            <a href="/books">View All Books</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedBooks;