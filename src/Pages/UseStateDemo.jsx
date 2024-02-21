import { useState } from 'react'

import React from 'react'



function UseStateDemo() {
    const [name,setName]= useState ("Khushi")
    const changeName = ()=>{
        setName("Khushi Jukanti")
    }
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={changeName}>Change Name</button>
       
    </div>
  )
}

export default UseStateDemo
