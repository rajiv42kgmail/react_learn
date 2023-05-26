import React from 'react'
import { useState,useEffect } from 'react';

const Effect = () => {
    const[data,setData] = useState();
const[counter,setCounter] = useState(0)
   const handleForm = (e) => {
        setData(e.target.value);

    }
  const changeCounter  = () => {
    setCounter(counter+1)

  }
  useEffect(() => {
      document.title = `Clicked counter ${counter} `;
      },[counter]);

  return (
    <>
    <div>UseEffect</div> 
    <input type='text' onChange={handleForm} />
    <br/>
    <button onClick={changeCounter} >Click</button>
    {data}
    <br/>
    
   {counter}
    </>
    
  )
}

export default Effect