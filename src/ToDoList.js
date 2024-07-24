import React, { useState } from 'react'
import './'

export const ToDoList = () => {
  
    const [activity,setActivity] = useState("");
    const [listData,setListData] = useState([]);

    function addActivity(){
     setListData((listData)=>{
        const addedList = [...listData,activity];
        console.log(addedList);
        setActivity("");
        return addedList;

     })
    }
    
  function removeActivity(i){
    const filteringList = listData.filter((elem,id)=>{
        return i != id;
   
    })
    setListData(filteringList);

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
            
                {listData != [] && listData.map((data,i)=>{
                    return(
                        <ul className='ul' key={i}>
                           <li className='li'>{data}<button onClick={()=>removeActivity(i)}>Remove</button></li>
                        </ul>
                      
                
                    )
                })}
            
            

          </div>
        </div>
    </div>
  )
}
