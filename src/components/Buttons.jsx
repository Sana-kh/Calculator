import Display from "./Display"
import { useState } from "react"
import Clear from "./Clear"
import Delete from "./Delete"
import Equals from "./Equals"

export default function Buttons({display, setDisplay, errorMessage, setErrorMessage}){

    const buttonPressedHandler = (event)=>{
        setDisplay((currentDisplay)=>{
            if(currentDisplay === "0"){
                return event.target.value
            }
            return currentDisplay+event.target.value
        })
        event.preventDefault();
    }
        
    return(
        <form> 
            <div className="buttons">
                <button value="1" onClick={buttonPressedHandler}>1</button>
                <button value="2" onClick={buttonPressedHandler}>2</button>
                <button value="3" onClick={buttonPressedHandler}>3</button>
                <Clear setDisplay={setDisplay}/>
                <button value="4" onClick={buttonPressedHandler}>4</button>
                <button value="5" onClick={buttonPressedHandler}>5</button>
                <button value="6" onClick={buttonPressedHandler}>6</button>
                <button value="+" onClick={buttonPressedHandler}>+</button>
                <button value="7" onClick={buttonPressedHandler}>7</button>
                <button value="8" onClick={buttonPressedHandler}>8</button>
                <button value="9" onClick={buttonPressedHandler}> 9</button>
                <button value="-" onClick={buttonPressedHandler}>-</button>
                <button value="x" onClick={buttonPressedHandler}>x</button>
                <button value="0" onClick={buttonPressedHandler}>0</button>
                <button value="/" onClick={buttonPressedHandler}>/</button>
                <Equals setDisplay={setDisplay} setErrorMessage={setErrorMessage}/>
                <button value="(" onClick={buttonPressedHandler}>(</button>
                <button value=")" onClick={buttonPressedHandler}>)</button>
                <button value="." onClick={buttonPressedHandler}>.</button>
                <Delete setDisplay={setDisplay}/>
            </div>
        </form>
    )
}
