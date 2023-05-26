import React from 'react'
import { useState,useEffect } from 'react';

const EffectOne = () => {

    const[counter1,setCounter1] = useState(0)
    const[counter2,setCounter2] = useState(0)
    const[counter3,setCounter3] = useState(0)
    
    
     useEffect(() => {
      document.title = `Clicked counter ${counter1} `;
      },[counter1]);

  return (
    <>
    <div>UseEffect Part One</div> 
    <button onClick={() => setCounter1(counter1+1)} >Click 1</button>
    <button onClick={() => setCounter2(counter2+1)} >Click 2</button>
    <button onClick={() => setCounter3(counter3+1)} >Click 3</button>

    <br/>
    
   {counter1}   {counter2}   {counter3}
    </>
    
  )
}

export default EffectOne