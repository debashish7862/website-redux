import React from 'react'
import './technologies.css'
import { Link,Outlet } from 'react-router-dom'
export default function Technologies() {
  return (
    <div className='technologies'>
        <div className="left">
           <Link to='html'>HTML</Link>
           <Link to='css'>CSS</Link>
           <Link to='js'>JS</Link>
           <Link to='react'>React</Link>

        </div>
        <div className="right">
      <Outlet/>
        </div>
    </div>
  )
}
