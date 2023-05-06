import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const[counter,setCounter] = useState(0);
    return (
        <>
        <div><h1>Counter</h1></div>
        <h1>{counter}</h1>
        <button onClick={()=>setCounter(counter+1)}>Add</button>
        <button onClick={()=>setCounter(counter-1)}>Sub</button>
        </>
    )


}
export default Counter