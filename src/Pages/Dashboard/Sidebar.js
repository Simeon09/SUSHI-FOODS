import React from "react";
import Dashlogo from "../../Component/Images/dashlogo.png";

import dashIcon from "../../Component/Images/dash.png.png";
import profile from "../../Component/Images/profile (2).png";
import Order from "../../Component/Images/order.png";
import cart from "../../Component/Images/cart.png";
import "./sass/dash.css";

const Sidebar = () => {
  return (
    <div className="dashboard">

      <div className="sidebar">
        <div className="sidelogo">
          <img src={Dashlogo} alt="logo" />
        </div>
        <div className="sideNav">
          <div className="sideicon">

            <span  className=" fistsideicon active" >
              <img src={dashIcon} alt="icon" />
              <p>Dashboard</p>
            </span>
          </div>
          <div className="sideicon">
            <img src={profile} alt="icon" />
            <p>Your Profile</p>
          </div>
          <div className="sideicon">
            <img src={Order} alt="icon" />
            <p>Orders</p>
            <button>6</button>
          </div>
          <div className="sideicon">
            <img src={cart} alt="icon" />
            <p>Your Cart</p>
            <button>6</button>
          </div>
        </div>
      </div>
      <div className="mainPage">
        <p>mainpage</p>
      </div>
    </div>
  );
};

export default Sidebar;
