import React from 'react'

const ChildComp = (props) => {
    const returnData = "Orange";
    props.setgetData(returnData);
    return (    
        <>
        <div><h1>Child Component</h1></div>
        <h3>Data received in child {props.childData}</h3>

        </>
    )
}
export default ChildComp