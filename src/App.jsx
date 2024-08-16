import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Footer from './Components/Footer'
import { Register } from './Components/Register'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='min-vh-100 bg-dark'>
      <Navbar />
      {/* <Home /> */}
      <Register />
      <Footer />
      </div>
    </>
  )
}

export default App
