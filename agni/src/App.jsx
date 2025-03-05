import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Top from './components/Top'
import Nurse from './components/Nurse'
import Services from './components/Services'
import WhyChoose from './components/WhyChoose'
import Carousel from './components/Carousel'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Top/>
    <Nurse/>
    <Services/>
    <WhyChoose/>
    <Carousel/>
    <Card/>
    </>
  )
}

export default App
