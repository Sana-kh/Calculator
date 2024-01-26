import { useState } from 'react'
import '../App.css'
import Display from "./Display"
import Buttons from "./Buttons"

function App() {
  const [display, setDisplay] = useState("0")
  const [errorMessage, setErrorMessage] = useState(false)

  return (
    <>  
   <Display display={display} setDisplay={setDisplay} errorMessage={errorMessage}/>
   <Buttons display={display} setDisplay={setDisplay} errorMessage={errorMessage} setErrorMessage={setErrorMessage}/>
    </>
  )
}

export default App
