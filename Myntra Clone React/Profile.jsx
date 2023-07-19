import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Profile = () => {
  return (
    <div>
        <div style={{textAlign:"center",backgroundColor:"orange", height:"40px", paddingTop:"10px",fontSize:"18px"}}>
            <Link to="/profile/details" style={{marginRight:"20px"}}>Details</Link>
            <Link to="/profile/followers" style={{marginRight:"20px"}}>Followers</Link>
            <Link to="/profile/following" style={{marginRight:"20px"}}>Following</Link>
        </div>
        <Outlet/>
    </div>
  )
}

export default Profile
