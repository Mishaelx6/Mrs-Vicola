import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ShoppingCart, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useCart } from '@/context/CartContext'
import './Navbar.scss'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Books', href: '/books' },
  { name: 'Videos', href: '/videos' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { state } = useCart()
  const cartItemCount = state.items.length

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/" className="logo-text">
            Mrs Vicola
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-links">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="navbar-link"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="navbar-actions">
          <Button variant="ghost" size="sm" className="sign-in-btn">
            <User className="w-4 h-4 mr-2" />
            Sign In
          </Button>
          <Button variant="default" size="sm" className="sign-up-btn">
            Sign Up
          </Button>
          <Link to="/cart">
            <div className="relative">
              <Button variant="ghost" size="icon" className="cart-btn">
                <ShoppingCart className="w-5 h-5" />
              </Button>
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-btn">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="mobile-menu">
              <div className="mobile-menu-header">
                <span className="mobile-logo">Mrs Vicola</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>

              <div className="mobile-menu-content">
                {/* Mobile Navigation Links */}
                <div className="mobile-nav-links">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="mobile-nav-link"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

                {/* Mobile Actions */}
                <div className="mobile-actions">
                  <Button variant="outline" className="w-full" size="lg">
                    <User className="w-4 h-4 mr-2" />
                    Sign In
                  </Button>
                  <Button variant="default" className="w-full" size="lg">
                    Sign Up
                  </Button>
                  <Link to="/cart" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" className="w-full" size="lg">
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Cart ({cartItemCount})
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

export default Navbar