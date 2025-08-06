import { useState } from 'react'
import Navbar from './components/navbar/navbar'
import Home from './components/home/home'
import Contact from './components/contact/contact'
import About from './components/about/about'
import Project from './components/project/project'
import Skill from './components/skill/skill'
import Footer from './components/footer/footer'

import './App.css'

function App() {
  
  return (
    <>
      <div className={`font-italiana`}>
        <Navbar />
        <Home />
        <About />
        <Project />
        <Skill />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
