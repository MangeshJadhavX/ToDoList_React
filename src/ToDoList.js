import React from 'react'
import './'

export const ToDoList = () => {
  return (
    <div className='to_do_list'>
        <div className='container'>
            <h1>To Do List</h1>
          <div className='input'>
            <input value= "" placeholder='Add Task' type='text' className='input'></input>
            <button className='btn' >Add Task</button>
          </div>
        </div>
    </div>
  )
}
