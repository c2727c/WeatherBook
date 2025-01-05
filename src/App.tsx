import { useState } from 'react'
import './App.css'
import ProjectCarousel from './components/ProjectCarousel/ProjectCarousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProjectCarousel />
    </>
  )
}

export default App
