// import React, { useEffect, useState } from 'react'
// import { Link, useLocation } from 'react-router-dom'
// import '../styles/Navbar.css'

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false)
//   const loc = useLocation()

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20)
//     window.addEventListener('scroll', onScroll)
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   return (
//     <header className={`da-navbar ${scrolled ? 'scrolled' : ''}`}>
//       <div className="nav-inner">
//         <div className="logo"><Link to="/" aria-label="Home">Dorcas <span>Anthony</span></Link></div>
//         <nav className="nav-links" role="navigation" aria-label="Main Navigation">
//           <Link to="/" className={loc.pathname === '/' ? 'active' : ''}>Home</Link>
//           <Link to="/about" className={loc.pathname === '/about' ? 'active' : ''}>About</Link>
//           <Link to="/skills" className={loc.pathname === '/skills' ? 'active' : ''}>Skills</Link>
//           <Link to="/projects" className={loc.pathname === '/projects' ? 'active' : ''}>Projects</Link>
//           <Link to="/contact" className={loc.pathname === '/contact' ? 'active' : ''}>Contact</Link>
//         </nav>
//       </div>

//     </header >
//   )
// }







// import React, { useState, useEffect } from 'react'
// import { Link, useLocation } from 'react-router-dom'
// import '../styles/Navbar.css'

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false)
//   const [menuOpen, setMenuOpen] = useState(false)
//   const loc = useLocation()

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20)
//     window.addEventListener('scroll', onScroll)
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   const toggleMenu = () => setMenuOpen(!menuOpen)
//   const closeMenu = () => setMenuOpen(false)

//   return (
//     <header className={`da-navbar ${scrolled ? 'scrolled' : ''}`}>
//       <div className="nav-inner">
//         <div className="logo">
//           <Link to="/" aria-label="Home" onClick={closeMenu}>
//             Dorcas <span>Anthony</span>
//           </Link>
//         </div>

//         <div
//           className={`menu-toggle ${menuOpen ? 'open' : ''}`}
//           onClick={toggleMenu}
//           aria-label="Toggle navigation menu"
//           role="button"
//           tabIndex={0}
//         >
//           <span className="bar"></span>
//           <span className="bar"></span>
//           <span className="bar"></span>
//         </div>


//         {/* Navigation Links */}
//         <nav
//           className={`nav-links ${menuOpen ? 'open' : ''}`}
//           role="navigation"
//           aria-label="Main Navigation"
//         >
//           <Link to="/" className={loc.pathname === '/' ? 'active' : ''} onClick={closeMenu}>Home</Link>
//           <Link to="/about" className={loc.pathname === '/about' ? 'active' : ''} onClick={closeMenu}>About</Link>
//           <Link to="/skills" className={loc.pathname === '/skills' ? 'active' : ''} onClick={closeMenu}>Skills</Link>
//           <Link to="/projects" className={loc.pathname === '/projects' ? 'active' : ''} onClick={closeMenu}>Projects</Link>
//           <Link to="/contact" className={loc.pathname === '/contact' ? 'active' : ''} onClick={closeMenu}>Contact</Link>
//         </nav>
//       </div>


//        <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
//         <Link to="/" onClick={closeMenu}>Home</Link>
//         <Link to="/about" onClick={closeMenu}>About</Link>
//         <Link to="/skills" onClick={closeMenu}>Skills</Link>
//         <Link to="/projects" onClick={closeMenu}>Projects</Link>
//         <Link to="/contact" onClick={closeMenu}>Contact</Link>
//       </div>

//     </header>
//   )
// }



import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const loc = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`da-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>Dorcas <span>Anthony</span></Link>
        </div>

        {/* Hamburger Menu */}
        <div
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          role="button"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

       
        <nav className="nav-links">
          <Link to="/" className={loc.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/about" className={loc.pathname === '/about' ? 'active' : ''}>About</Link>
          <Link to="/skills" className={loc.pathname === '/skills' ? 'active' : ''}>Skills</Link>
          <Link to="/projects" className={loc.pathname === '/projects' ? 'active' : ''}>Projects</Link>
          <Link to="/contact" className={loc.pathname === '/contact' ? 'active' : ''}>Contact</Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/skills" onClick={closeMenu}>Skills</Link>
        <Link to="/projects" onClick={closeMenu}>Projects</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
      </div>
    </header>
  )
}
