import Display from "./Display"
import { useState } from "react"

export default function Buttons({display, setDisplay}){
    console.log(display)
    const submit =()=>{
        
    }
    return(
        <form> 
            <input value={display} readOnly></input><br/>
            <div className="buttons">
                <button  value="1" onClick={(event)=>{
                    console.log(event.target.value)
                    setDisplay((currentDisplay)=>{
                        return currentDisplay+event.target.value
                    })
                    event.preventDefault();
                }}>1</button>
                <button value="2" onClick={(event)=>{
                    setDisplay((currentDisplay)=>{
                        return currentDisplay+event.target.value
                    })
                }}>2</button>
                <button value="3" onClick={(event)=>{
                    setDisplay((currentDisplay)=>{
                        return currentDisplay+event.target.value
                    })
                }}>3</button>
                <button value="clear" onClick={(event)=>{
                    setDisplay((currentDisplay)=>{
                        return currentDisplay+event.target.value
                    })
                }}>Clear</button>
                <button value="4" onClick={(event)=>{
                    setDisplay((currentDisplay)=>{
                        return currentDisplay+event.target.value
                    })
                }}>4</button>
                <button value="5" onClick={(event)=>{
                    setDisplay((currentDisplay)=>{
                        return currentDisplay+event.target.value
                    })
                }}>5</button>
                <button value="6" onClick={(event)=>{
                    setDisplay((currentDisplay)=>{
                        return currentDisplay+event.target.value
                    })
                }}>6</button>
                <button value="+" onClick={(event)=>{
                    setDisplay((currentDisplay)=>{
                        return currentDisplay+event.target.value
                    })
                }}>+</button>
                <button value="7" onClick={(event)=>{
                    setDisplay((currentDisplay)=>{
                        return currentDisplay+event.target.value
                    })
                }}>7</button>
                <button value="8" onClick={(event)=>{
                    setDisplay((currentDisplay)=>{
                        return currentDisplay+event.target.value
                    })
                }}>8</button>
                <button value="9" onClick={(event)=>{
                    setDisplay((currentDisplay)=>{
                        return currentDisplay+event.target.value
                    })
                }}> 9</button>
                <button value="-" onClick={(event)=>{
                    setDisplay((currentDisplay)=>{
                        return currentDisplay+event.target.value
                    })
                }}>-</button>
                <button value="x" onClick={(event)=>{
                    setDisplay((currentDisplay)=>{
                        return currentDisplay+event.target.value
                    })
                }}>x</button>
                <button value="0" onClick={(event)=>{
                    setDisplay((currentDisplay)=>{
                        return currentDisplay+event.target.value
                    })
                }}>0</button>
                <button value="/" onClick={(event)=>{
                    setDisplay((currentDisplay)=>{
                        return currentDisplay+event.target.value
                    })
                }}>/</button>
                <button value="=" onClick={(event)=>{
                    setDisplay((currentDisplay)=>{
                        return currentDisplay
                    })
                }}>=</button>
                <button value="(" onClick={(event)=>{
                    setDisplay((currentDisplay)=>{
                        return currentDisplay+event.target.value
                    })
                }}>(</button>
                <button value=")" onClick={(event)=>{
                    setDisplay((currentDisplay)=>{
                        return currentDisplay+event.target.value
                    })
                }}>)</button>
                <button value="." onClick={(event)=>{
                    setDisplay((currentDisplay)=>{
                        return currentDisplay+event.target.value
                    })
                }}>.</button>
                <button value="back" onClick={(event)=>{
                    setDisplay((currentDisplay)=>{
                        return currentDisplay
                    })
                }}>back</button>
            </div>
        </form>
    )
}