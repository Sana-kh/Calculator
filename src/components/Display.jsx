import { useState } from "react"

export default function Display({display, errorMessage}){
    
return (
    <div>
        <input value={display} readOnly></input><br/>
            { 
         errorMessage ? (<p>Malformed Expression</p>) : null }
    </div>
)
}