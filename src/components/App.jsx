import { useState } from 'react'
import '../App.css'
import Display from "./Display"
import Buttons from "./Buttons"

function App() {
  const [count, setCount] = useState(0)
  const [display, setDisplay] = useState("")

  return (
    <>
   
   <Buttons display={display} setDisplay={setDisplay}/>
    </>
  )
}

export default App
