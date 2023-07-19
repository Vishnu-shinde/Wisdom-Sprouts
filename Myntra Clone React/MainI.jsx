import React from "react";
import "./Main.css";

const MainI = () => {
  return (
    <>
      <div className="container" style={{marginTop:"40px"}}>
        <img
          src="https://www.shopickr.com/wp-content/uploads/2019/02/myntra-accessories-sale.jpg"
          alt="INTRO"
          height="500px"
          width="100%"
        />
      </div>

      <div style={{margin:"20px 0px 0px 40%"}}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEuJ_OqXFeKDDOPjrixoxDEyzJLWZbltiyJQ&usqp=CAU"
          alt="OMG Deals"
          height="200px"
          width="300px"
        />
      </div>
      <div class="text-center fs-3 fw-bold">CRAZY SUMMER DEALS</div>
      <button href="" class="button">View All</button>
    </>
  );
};

export default MainI;
