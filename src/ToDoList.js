import React, { useState } from 'react'
import './'

export const ToDoList = () => {
  
    const [activity,setActivity] = useState("");
    cont [listData,setListData] = useState([]);

    function addActivity(){
     setListData([...listData,activity]);
     console.log(listData); 
    }

  return (
    <div className='to_do_list'>
        <div className='container'>
            <h1>To Do List</h1>
          <div className='input'>
            <input value= {activity} placeholder='Add Task' type='text' className='input' onChange={(e)=>{
                setActivity(e.target.value);
            }} ></input>
            <button onClick={addActivity} className='btn' >Add Task</button>
          </div>
        </div>
    </div>
  )
}
