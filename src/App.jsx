import './App.css'
import { ReactLenis, useLenis } from 'lenis/react'

import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import Navbar from './components/Navbar'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Client from './components/Client'
import Project from './components/Project'
import Footer from './components/Footer'

function App() {


  const lenis = useLenis(({ scroll }) => {})


  return (
    <>
    <ReactLenis root >
      <div className='w-full min-h-screen  text-white bg-zinc-900'>
        <Navbar/>
        <LandingPage/>
        <Marquee/>
        <About/>
        <Eyes/>
        <Featured/>
        <Client/>
        <Cards/>
        <Project/>
        <Footer/>
      </div>
    </ReactLenis>
    </>
  )
}

export default App
