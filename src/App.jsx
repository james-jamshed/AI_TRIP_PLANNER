import { useState } from 'react'
import './App.css'
import Hero from './components/custom/Hero'
import Travelpage from './components/custom/Travelpage'
import Footer from './components/custom/Footer'
import Section2 from './components/custom/Section2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Hero */}
      <Hero/>
    
      <Travelpage></Travelpage>
      <Section2></Section2>
      <Footer></Footer>
    </>
  )
}

export default App
