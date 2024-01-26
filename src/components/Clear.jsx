
export default function Clear ({setDisplay}) {
    
    const clearPressedHandler = (event) => {
        setDisplay((currentDisplay) => {
            return currentDisplay = "0"
        })
        event.preventDefault()
    }

    return <button value="clear" onClick={clearPressedHandler}>Clear</button>
}