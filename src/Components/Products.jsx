import React from 'react'
import { useEffect,useState } from 'react'
import './product.css'
import { Link } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'

import ActionCreator from './Redux/ActionCreator';
export default function Products() {


const dispatch =useDispatch()
  const{products}=   useSelector((storedata)=>{
        return storedata;
     })



    
     
     useEffect(()=>{
        if(products.length===0){
           console.log("Sent Request")
                fetch("https://fakestoreapi.com/products")
                .then((res)=>res.json())
                .then((data=>{
                    console.log(data)
                   dispatch(ActionCreator(data))
        
                }
                ))
             

        }
     },[])
    
  return (
    <div className='products'>
        
        {
            products.map((ele)=>{
                return<div className='card'>
                <img src={ele.image} alt="" />
                <p>{ele.title}</p>
                <p>{ele.price}</p>
             <Link to={`/productdetails/${ele.id}`}>  <button>View Details</button></Link> 
             <Link to="/addtocart"> <button>Add to Cart</button></Link>
            </div>
            })
        }
        
    </div>
  )
}
