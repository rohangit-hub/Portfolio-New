import React from 'react'
import './navbar.css'
import resume from '../../assets/resume.pdf'


function navbar() {
  return (
    <div className='container font-roboto'>
        <div className='left-container'>
        <a href='#home'>Home</a>
        <a href='#about'>About</a>
        <a href='#project'>Projects</a>
        <a href='#skill'>Skills</a>
        <a href='#contact'>Contact</a>
        </div>

        <div className='right-container'>
            <a href={resume} download='RohanTiwari-resume.pdf'>Download CV</a>
        </div>
    </div>
  )
}

export default navbar