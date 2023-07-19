import React from 'react'
import { Link } from 'react-router-dom'

const Beauty = () => {
  return (
    <>
        <div style={{marginTop:"10px", paddingLeft:"25px"}}>
        <small style={{fontSize:"14px"}}><Link to="/home" style={{textDecoration:"none", color:"black"}}>Home/</Link><strong> Personal care</strong></small><br />
        <p style={{fontSize:"15px",marginTop:"10px"}}><strong>Personal Care</strong> <smaller style={{color:"grey"}}>- 80289 items</smaller></p>
        </div> 
        <div className='navbar navbar-expand-lg ps-4'>
            <a className='buttext'><strong style={{fontSize:"15px",marginRight:"200px", color:"black"}}>FILTERS</strong></a>
            <a className='navbut buttext me-3'>Bundles <i class="fa fa-angle-down" aria-hidden="true"></i></a>
            <a className='navbut buttext me-3'>Country of origin <i class="fa fa-angle-down" aria-hidden="true"></i></a>
            <a className='navbut buttext'>Size<i class="fa fa-angle-down" aria-hidden="true" style={{color:"light-grey", marginLeft:"5px", marginTop:"5px"}}></i></a>
            <div className="dropdown">
              <button className='sort' style={{listStyle:"none", marginLeft:"700px", color:"gray"}}>Sort by : <strong style={{color:"black"}}>Recommended<i class="fa fa-angle-down" style={{float:"right",marginTop:"5px", fontSize:"18px",color:"gray",fontWeight:"550"}} aria-hidden="true"></i></strong></button>
              <div class="dropdown-content">
                <p href="#">Welcome</p>
                <a href="#">Orders</a>
                <a href="#">Wishlist</a>
                <a href="#">Gift Cards</a>
                <a href="#">Contact us</a>
                <a href="#">Coupons</a>
              </div>
            </div>
        </div>
        <hr />
    </>
  )
}

export default Beauty
