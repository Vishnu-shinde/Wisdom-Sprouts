import React from 'react'
import { useState, setColor } from 'react';

const Usestate = () => {
  // const[name,setName]=useState("Vishnu");
    return (
    <div style={{margin:"50px 100px 100px 100px"}}>
        <h1 style={{color:'pink'}} id="name">Vishnu</h1>
      {/* <input type={Text} id="inpu" style={{height:"40px", width:"300px"}}/> */}
      <button onClick={()=>setColor(document.getElementById('name').style.color = "blue")}>Click to Change</button>
    </div>
  )
}

export default Usestate
