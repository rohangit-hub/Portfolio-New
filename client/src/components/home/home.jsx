import './home.css'
import { useState, useEffect } from 'react'
import rohan from '../../assets/imageBlack.png'
import linkedin from '../../assets/linkedin-icon.png'
import github from '../../assets/github-icon.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'
import arrowDown from '../../assets/arrow-down.png'

function home() {
  const [showArrow, setShowArrow] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home')
      const aboutSection = document.getElementById('about')
      
      if (homeSection && aboutSection) {
        const homeSectionBottom = homeSection.offsetTop + homeSection.offsetHeight
        const scrollPosition = window.scrollY + window.innerHeight / 2
        
        // Hide arrow when we've scrolled past the home section
        setShowArrow(scrollPosition < homeSectionBottom)
      }
    }

    window.addEventListener('scroll', handleScroll)
    
    // Also handle click events on the arrow itself
    const handleArrowClick = () => {
      setTimeout(() => setShowArrow(false), 300) // Small delay for smooth transition
    }

    const arrowElement = document.querySelector('.arrow-down-container a')
    if (arrowElement) {
      arrowElement.addEventListener('click', handleArrowClick)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (arrowElement) {
        arrowElement.removeEventListener('click', handleArrowClick)
      }
    }
  }, [])
  return (
    <div className='home-container font-roboto' id='home'>
      <div className='home-content-left'>
        <h1 className='hello-text'>Hello, I' m</h1>
        <h1 className='name-text'>Rohan Tiwari</h1>
        <h1 className='full-stack-text'>Full Stack Developer & Designer</h1>
      <div className='social-media-container'>
        <a href='https://www.linkedin.com/in/rohan-tiwari-966465202/' target='_blank' rel='noopener noreferrer'>
           <img src={linkedin} alt='LinkedIn' className='social-media-icon'/>
        </a>
        <a href='https://github.com/rohangit-hub' target='_blank' rel='noopener noreferrer'>
           <img src={github} alt='GitHub' className='social-media-icon'/>
        </a>
        <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
           <img src={instagram} alt='Instagram' className='social-media-icon'/>
        </a>
        <a href='https://x.com/rohan0804_/' target='_blank' rel='noopener noreferrer'>
           <img src={twitter} alt='Twitter' className='social-media-icon'/>
        </a>
      </div>
      {showArrow && (
        <div className='arrow-down-container'>
          <a href='#about'>
            <img src={arrowDown} alt='Arrow Down' className='arrow-down-icon'/>
          </a>
        </div>
      )}
      </div>

        

      <div className='home-content-right'>
        <img src={rohan} alt="Rohan_Tiwari" className='home-content-right-img'/>
      </div>

    </div>
  )
}

export default home