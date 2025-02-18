import './App.css'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import Navbar from './components/Navbar'
import About from './components/About'

function App() {

  return (
    <>
      <div className='w-full min-h-screen  text-white bg-zinc-900'>
        <Navbar/>
        <LandingPage/>
        <Marquee/>
        <About/>
      </div>
    </>
  )
}

export default App
