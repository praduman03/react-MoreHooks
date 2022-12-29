import React, {useState, useRef} from 'react'
import Hidden from './Hidden';
let task=[];



function ToDo() {
    const [list,setlist]= useState({value:''})
    const addlist=()=>{
        if(list!==''){
            task.push(list.value)
        }
        setlist({value:''})
        console.log(task)
    }
    const focusref=useRef()

    const focus=()=>{
      focusref.current.focus()
    }

  return (
    <div>
      <div>
        <input ref={focusref} type="text" onChange={(e)=>{setlist({value:e.target.value})}} defaultValue={list.value} />
        <button onClick={addlist}>Add</button>
      </div>
      <div>
        <Hidden/>
      </div>
      <div>
        {task.map((data)=>{
                return <div><h3>{data}</h3>
                <button>toggle</button>
                </div>
        })}
      </div>
      <div>
        <button onClick={focus}>continue writing</button>
      </div>
    </div>
  )
}

export default ToDo
