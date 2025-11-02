import React from 'react'
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import './Footer.scss'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2 className="footer-title">Mrs Vicola</h2>
            <p className="footer-tagline">Inspiring writers, one story at a time.</p>
          </div>

          <nav className="footer-nav">
            <div className="nav-group">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#books">Books</a></li>
                <li><a href="#videos">Videos</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="nav-group">
              <h3>Resources</h3>
              <ul>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#newsletter">Newsletter</a></li>
                <li><a href="#workshops">Workshops</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>

            <div className="nav-group">
              <h3>Legal</h3>
              <ul>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Use</a></li>
                <li><a href="#cookies">Cookie Policy</a></li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="footer-bottom">
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Youtube size={20} />
            </a>
          </div>

          <p className="copyright">
            © {currentYear} Mrs Vicola. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer