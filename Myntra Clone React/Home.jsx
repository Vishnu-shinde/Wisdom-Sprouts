import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div style={{ height:"60px",textAlign:"center",textDecoration:"none",fontSize:"24px", paddingTop:"10px"}}>
            <Link to="/profile">Profile</Link>
        </div>
    </div>
  )
}

export default Home
