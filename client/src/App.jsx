import { useState } from 'react'
import LandingPage from './components/LandingPage'
import Navbar from './components/NavBar'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './styls/App.css'

function App() {


  return (
    <div className="App">
    <Navbar />
    <LandingPage />
    <About />
    <Contact />
    <Footer />
    </div>
  )
}

export default App
