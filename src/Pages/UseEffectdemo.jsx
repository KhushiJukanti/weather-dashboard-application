import { useState,useEffect } from 'react'
import React from 'react'


function UseEffectdemo() {
    const [name,SetName] = useState("Khusghi")

    useEffect(()=>{
        // document.title = `Hello, ${name}`;
        
        
    },[name]);
    

    const handleinputChange = (e)=>{
        SetName(e.target.value)
    }

    

  return (
    <div>
      <h1>Hello, {name}</h1>
      <input type="text" value={name} onChange={handleinputChange} />
    </div>
  )
}

export default UseEffectdemo
