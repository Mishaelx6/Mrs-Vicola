import React from 'react'
import { useParams } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import './Book.scss'
import { books } from '@/data/books'

const BookPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const book = books.find((b) => b.id === id)

  if (!book) {
    return (
      <div className="book-page">
        <main className="book-main container">
          <p>Book not found.</p>
        </main>
      </div>
    )
  }

  return (
    <div className="book-page">
      <main className="book-main container">
        <div className="book-grid">
          <div className="book-cover">
            <img src={book.coverImage} alt={`Cover of ${book.title}`} />
          </div>

          <div className="book-details">
            <h1 className="book-title">{book.title}</h1>
            <p className="book-subtitle">{book.subtitle || ''}</p>
            <p className="book-author">By {book.author || 'Mrs Vicola'}</p>

            <p className="book-description">{book.description}</p>

            <div className="book-purchase">
              <p className="book-price">{book.price}</p>
              <div className="purchase-cta">
                <Button variant="default" size="lg">Buy Now</Button>
                <Button variant="outline" size="lg">Add to Wishlist</Button>
              </div>
            </div>

            <section className="book-extras">
              <h3>About this book</h3>
              <p>
                Includes a short workbook, author notes, and suggested reading. Perfect for workshops
                and classroom use.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

export default BookPage
