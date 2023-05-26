import React from 'react'
import ChildComp from './ChildComp'
import { useState } from 'react';

const ParentComp = () => {
    const fruit = 'apple';
    const[getData,setgetData] = useState();
    return (
        <>
        <div><h1>Parent Component</h1></div>
        <ChildComp childData={fruit} setgetData={setgetData} />
        <h3>Received from Child:{getData}</h3>
        </>
    )


}
export default ParentComp