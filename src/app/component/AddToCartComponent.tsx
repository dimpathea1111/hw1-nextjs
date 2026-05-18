
"use client"

import { useState } from "react"


export default function AddToCartComponent(){
    //creating state
    // use tuple 
    //state , functionUpdateState   .intial value
    //    |          |                |
    const [count, setCount]=useState(0);


    return(
        <>
        <h1>Cart : {count}</h1>
        <button className="border p-4 rounded">Add To Cart</button>

        
        </>
    )
}