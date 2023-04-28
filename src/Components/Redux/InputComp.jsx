import React from 'react'
import { useState } from 'react'
import './inputComp.css'
import myStore from './Store'

export default function InputComp() {

const[state,setState]=useState("")

    const handleClick=()=>{
   myStore.dispatch({
    type:"name",
    userName:state,
   })

    }
  return (
    <div className='inputContainer'>
        <h1>Input Component</h1>
        <input type="text" onChange={(e)=>{setState(e.target.value)}} placeholder='Write here'/>
        <button onClick={handleClick}>submit</button>
    </div>
  )
}
