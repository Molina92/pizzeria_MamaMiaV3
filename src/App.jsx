import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import CardPizza from './Components/CardPizza'
import Footer from './Components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Header />
      <CardPizza
        nombre="Napolitana"
        precio={5950}
        ingredientes={["mozzarella", "tomate", "jamón", "orégano"]}
        imagen="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.co
m/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9
080-784dcc87ec2c"/>
      <Footer/>
    </>

  )
}

export default App
