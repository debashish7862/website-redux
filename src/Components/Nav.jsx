import React from 'react'
import './nav.css'
import { useContext } from 'react'
import { AuthContext } from './Context/Context'
import { Link, useNavigate } from 'react-router-dom'

export default function Nav() {


  const {setIsloggin}=useContext(AuthContext);
  const navigate=useNavigate()
  return (
    <div className='nav'>
        <h1>React Context</h1>


        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/products">Products</Link>
        <Link to="/support">Support</Link>
        <Link to="/technologies">Technologies</Link>
        <Link to="/cart">Cart{}</Link>
        <button onClick={()=>{setIsloggin(false)
        navigate("/")
        
        }}>Logout</button>
      <span></span>

    </div>
  )
}
