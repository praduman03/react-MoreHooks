import React, {useState,useReducer} from 'react'



function Hidden() {
    const [text,settext]=useState("morning walk")
    const [state,dispatch]= useReducer(reducer,text);

    

function reducer(text,action){
    switch(action.type){
        case 'hide':
            return settext('hidden')
        case 'nothide':
            return settext('morning walk')
        default:
            return text='error'

    }
}

const togglefunc=()=>{
    if(text==='morning walk'){
        dispatch({type:'hide'})
    }
    else{
        dispatch({type:'nothide'})
    }
}

  return (
    <div>
      <h3>{text}</h3>
      <button onClick={togglefunc}>Toggle</button>
    </div>
  )
}

export default Hidden
