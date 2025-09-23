import {  } from 'react'
import About from './About'
import NavBar from './NavBar'
import Hero from './Hero'
import './App.css'

function App() {
  return (
    <>
    <div className='fixed top-4 left-1/2 transform -translate-x-1/2 z-50'>
       <NavBar />
    </div>
      <Hero />
      <About />
    </>
  )
}



export default App
