import React from 'react'
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom'
import './productdetails.css'
export default function Productdetails() {

  const {id}=useParams();
  const[state,setState]=useState({
    id:0,
    title:" ",
    description:"",
    image:"",
    price:0
  })
  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            setState(data)
            
  })
        

  },[])
  return (
    <div className='productDetails'>
        <h1>Product Details:{id}</h1>
        <h2>{state.id}</h2>
        <h3>{state.price}</h3>
        <img src={state.image} alt="" />
        <p>{state.description}</p>
    </div>
  )
}
