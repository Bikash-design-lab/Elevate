import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TextSummarizer from './components/TextSummarizer'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>This is App page</h1>
      <TextSummarizer/>
    </>
  )
}

export default App
