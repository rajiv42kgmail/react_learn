import React from 'react'
import { useRef,useEffect } from 'react';

const UseRefComp2 = () => {
    const elementRef = useRef();
    useEffect(() => {
            const divElement = elementRef.current;
            console.log(divElement);
    });

  return (
    <div ref={elementRef}>UseRefComp2</div>
  )
}

export default UseRefComp2