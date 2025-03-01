import './App.css'
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

  return (
    <>
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
    </>
  )
}

export default App
