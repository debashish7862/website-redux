import React, {useContext } from 'react'
import { AuthContext } from './Context/Context'
import { Navigate } from 'react-router-dom';

export default function Protectedroutes({children}) {
    const{islogedin}=useContext(AuthContext);
  if (islogedin){
    return children ; 
  }else{
    return<Navigate to="/"/>
  }
  
}
