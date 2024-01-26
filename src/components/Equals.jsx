
export default function Equals ({setDisplay, setErrorMessage}) {

    const equalsPressedHandler = (event) => {
        setDisplay((currentDisplay) => {
            try{
                setErrorMessage(false)
                 return currentDisplay = (eval(currentDisplay.replace(/x/, "*")))
            } catch (error){ 
                  setErrorMessage(true)
                  return currentDisplay
            }
        })
        event.preventDefault()
    }   

    return <button value="=" onClick={equalsPressedHandler}>=</button>

}