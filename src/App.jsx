import {  } from 'react'
import About from './About'
import NavBar from './NavBar'
import Hero from './Hero'
import SkillsSection from './Skill'
import Projects from './Projects'
import './App.css'
import {BrowserRouter,  Routes , Route } from 'react-router-dom'

function App() {
  return (
    <>
      <div className='fixed top-4 left-1/2 transform -translate-x-1/2 z-50'>
        <NavBar />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<SkillsSection />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}



export default App
