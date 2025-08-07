import React, { useState, useEffect, useRef } from 'react'
import './navbar.css'
import resume from '../../assets/resume.pdf'


function navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className='container font-roboto'>
        {/* Desktop Navigation */}
        <div className='left-container desktop-nav'>
        <a href='#home' onClick={closeMenu}>Home</a>
        <a href='#about' onClick={closeMenu}>About</a>
        <a href='#project' onClick={closeMenu}>Projects</a>
        <a href='#skill' onClick={closeMenu}>Skills</a>
        <a href='#contact' onClick={closeMenu}>Contact</a>
        </div>

        <div className='right-container desktop-nav'>
            <a href={resume} download='RohanTiwari-resume.pdf'>Download CV</a>
        </div>

        {/* Mobile Burger Menu */}
        <div className='mobile-nav' ref={menuRef}>
          <button className='burger-button' onClick={toggleMenu}>
            <span className={`burger-line ${isMenuOpen ? 'active' : ''}`}></span>
            <span className={`burger-line ${isMenuOpen ? 'active' : ''}`}></span>
            <span className={`burger-line ${isMenuOpen ? 'active' : ''}`}></span>
          </button>

          {/* Mobile Dropdown Menu */}
          <div className={`mobile-dropdown ${isMenuOpen ? 'open' : ''}`}>
            <a href='#home' onClick={closeMenu}>Home</a>
            <a href='#about' onClick={closeMenu}>About</a>
            <a href='#project' onClick={closeMenu}>Projects</a>
            <a href='#skill' onClick={closeMenu}>Skills</a>
            <a href='#contact' onClick={closeMenu}>Contact</a>
            <a href={resume} download='RohanTiwari-resume.pdf' onClick={closeMenu}>Download CV</a>
          </div>
        </div>
    </div>
  )
}

export default navbar