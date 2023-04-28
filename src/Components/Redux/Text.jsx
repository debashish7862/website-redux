import React from 'react'
import {useSelector} from 'react-redux'
import './text.css'

export default function Text() {
    const data = useSelector((storedata)=>{
       return storedata;

    })
  return (
    <div className='textComp'>
        <h2>Text Component</h2>
        <h3>You type:</h3>
        <p>{data.name}</p>
    </div>
  )
}
