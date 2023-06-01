import React from 'react'
import { useState } from 'react';
const Taskshow = (props) => {
//  const[taskdata,setTaskData] = useState(props);

  console.log({props})
    const deleteTask = (e) => {
      props.setTaskData(props.taskdata.filter(item => item !== e.target.value));

         // props.setTaskData([]);

    }



 // console.log({taskdata})
  return (
    <>
    <div>Added Tasks</div>
    {
        props.taskdata.map((task) => {
            return(
                <>
                <span >{task}</span>
                <button onClick={deleteTask} value={task} >Delete</button><br/>
                </>
            )
        })
    }


        </>
    
  )
}

export default Taskshow