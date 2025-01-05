import { useState } from 'react'
import './App.css'
import ProjectCarousel from './components/PeojectCarousel/PeojectCarousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProjectCarousel />
    </>
  )
}

export default App
