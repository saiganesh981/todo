import React from 'react'
import { useState,useEffect } from 'react'
const Statemgm = () => {
    const[city,setCity] = useState("hyderabad")
  useEffect(()=>{

    if(city==="banglore"){
        setCity("Tirupati")
    }else{
        setCity("Goa")
    }
  },[] )



    
  return (
    <div>
      <h1>I live in {city}</h1>
    </div>
  )
}

export default Statemgm
