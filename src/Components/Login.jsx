import React, { useState,useContext} from 'react'
import './login.css'
import { AuthContext } from './Context/Context'
export default function Login() {
  const {setIsloggin}= useContext(AuthContext);
  const[userData,setUserData]=useState({
    username:"admin",
    password:"admin@1234"
  })

  const handleAuthentication =()=>{
    if(userData.username==="admin" && userData.password==="admin@123"){
      setIsloggin(true)
    }else{
      alert("Enter proper Credentials")
    }
  }

  return (
<div className='container'>
    <div className='login'>

        <h1>Login</h1>
        <input type="text" placeholder='Username' onChange={(e)=>{
          setUserData({
            ...userData,
            username:e.target.value
          })
        }} />
        <input type="password" placeholder='password' onChange={(e)=>{
          setUserData({
            ...userData,
            password:e.target.value
          })
        }} />
         <button onClick={handleAuthentication}>Submit</button>

    </div>
    </div>
  )
}
