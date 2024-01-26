
export default function Delete ({setDisplay}) {

const backPressedHandler = (event) => {
    setDisplay((currentDisplay) => {
        return currentDisplay = currentDisplay.slice(0, -1)
    }) 
    event.preventDefault()
}

return  <button value="back" onClick={backPressedHandler}>back</button>
}