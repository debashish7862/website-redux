import React from 'react'
import { useEffect,useState } from 'react'
import './product.css'
import { Link } from 'react-router-dom';
export default function Products() {
    const [product,setProduct]=useState([]);
     useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then((res)=>res.json())
        .then((data=>{
            console.log(data)
            setProduct(data)

        }
        ))
     })
    
  return (
    <div className='products'>
        
        {
            product.map((ele)=>{
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
