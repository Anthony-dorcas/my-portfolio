import React from 'react'
import { FaWhatsapp, FaTwitter, FaLinkedinIn, FaGithub, FaYoutube } from 'react-icons/fa'
import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="social-icons">
          <a href="https://wa.me/2347052508893" target="_blank" rel="noreferrer">
            <FaWhatsapp />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://youtube.com/@codeWithDorcas" target="_blank" rel="noreferrer">
            <FaYoutube />
          </a>
        </div>


        {/* Navigation Links */}
        <ul className="footer-nav">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© 2025 Dorcas Anthony | Built with React </p>
          <p>Made with ❤️ and creativity</p>
        </div>
      </div>
    </footer>
  )
}
