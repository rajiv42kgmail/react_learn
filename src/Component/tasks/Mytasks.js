import React from 'react'
import {useRef,useState} from 'react';
import Taskshow from './Taskshow';


const Mytasks = () => {
    var getData = [];
    const inputRef = useRef();
    const[textVal,setTextValue] = useState("");
    const[prevVal,setPrevValue] = useState("");
    const[counterVal,setCounterVal] = useState(0);
    const[taskdata,setTaskData] = useState([]);
    const[getRowIdData,setgetRowIdData] = useState();
    
    const handleChange = event => {
        setTextValue(event.target.value);
      };
    const handleTask = (e) => {
        e.preventDefault();
        setCounterVal(counterVal+1)
        setPrevValue(inputRef.current.value);
       // console.log(prevVal +"--"+inputRef.current.value);
        if(prevVal !== '') {
        //  getData['taskname'] = inputRef.current.value
         setTaskData(taskdata => [...taskdata, inputRef.current.value ]);

        } else {
          //getData['taskname'] = textVal
         
         setTaskData(taskdata => [...taskdata, textVal ]);
         }
         //getData['rowId'] = counterVal
         //setTaskData(taskdata => [...taskdata, getData]);

         //setTaskData({...taskdata,getData})
         setTextValue('')

    }   
    
    if(getRowIdData) {
     //  alert(getRowIdData)
      // setTaskData((taskdata) => taskdata.filter((_, value) => value !== getRowIdData));
      //setTaskData([])
      //return;
       // setTaskData(taskdata.filter(getData => getData.rowId !== getRowIdData));
     } 
  return (
    <>
    <h3>Mytasks</h3>
    <form>
            <label>Enter Task: </label>
            <input type='text' name='taskname'  ref={inputRef} value={textVal} onChange={handleChange} />
            <input type='submit' value='Submit' name='submitTask' onClick={handleTask} /> 
    </form>
      <Taskshow taskdata={taskdata} setTaskData={setTaskData} />

    </>
  )
}

export default Mytasks