import { useState, useEffect } from 'react'
import './App.scss'
import Loader from './components/Loader'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Books, Videos, VideoPage, Cart } from '@/pages'
import BookPage from './pages/Book'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import { CartProvider } from '@/context/CartContext'

function App() {
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    // Simulate connection establishment
    const timer = setTimeout(() => {
      setIsConnected(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isConnected) {
    return <Loader message="Establishing connection..." size="medium" />
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/books" element={<Books />} />
              <Route path="/book/:id" element={<BookPage />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/video/:id" element={<VideoPage />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default App
