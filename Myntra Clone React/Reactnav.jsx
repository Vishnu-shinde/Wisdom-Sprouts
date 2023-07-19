import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Link, Outlet } from 'react-router-dom';   

function Reactnav() {
  return (
    
    <div>
        <div style={{ height:"60px",textAlign:"center",textDecoration:"none",fontSize:"24px", paddingTop:"10px"}}>
            <Link to="/reels" style={{marginRight:"40px"}}>Reels</Link>
            <Link to="/" style={{marginRight:"40px"}}>Posts</Link>
            <Link to="/" style={{marginRight:"40px"}}>Story</Link>
            <Link to="/profile" style={{marginRight:"40px"}}>Profile</Link>
        </div>
        {/* <Outlet/> */}
    </div>
  )
}

export default Reactnav
