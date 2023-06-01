import React from 'react'
const Taskshow = (props) => {

  console.log({props})
    const deleteTask = (e) => {
      props.setTaskData(props.taskdata.filter(item => item !== e.target.value));

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