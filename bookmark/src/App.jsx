import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  const handleAdd = () => {
    setCounter((value) => value + 1)
  }
  const handleSub = () => {
    setCounter((v) => v - 1)
  }
  return (
    <>
      <button onClick={handleAdd}>Add</button>
      <h1>{counter}</h1>
      <button onClick={handleSub}>Subtract</button>
    </>
  )
}

export default App
