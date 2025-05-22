import { useState } from 'react'
import './App.css'
import Hero from './components/custom/Hero'
import Travelpage from './components/custom/Travelpage'
import Footer from './components/custom/Footer'
import Section2 from './components/custom/Section2'
import Section3 from './components/custom/Section3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Hero */}
      
      
        <Hero />
      
    <Section3></Section3>
      <Travelpage></Travelpage>
      <Section2></Section2>
      <Footer></Footer>
    </>
  )
}

export default App
