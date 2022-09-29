import React  from "react";
import Dashlogo from "../../Component/Images/dashlogo.png";

import dashIcon from "../../Component/Images/dash.png.png";
import profile from "../../Component/Images/profile (2).png";
import Order from "../../Component/Images/order.png";
import cart from "../../Component/Images/cart.png";
import "./sass/dash.css";
import avatar from "../../Component/Images/avatar.svg"
import pasta from '../../Component/Images/pasta.svg';
import burger from '../../Component/Images/burger.svg';
import balls from '../../Component/Images/balls.svg';
import spagg from '../../Component/Images/spagg.svg';
import bread from '../../Component/Images/bread.svg';
import china from '../../Component/Images/china.svg';
import AddCart from './Modal/AddCart'
import { useState } from "react";

const Sidebar = () => {
  let userDetails = JSON.parse(sessionStorage.getItem("user",))
  const foods = [
    {id:1, foodname:"Stir Fry Pasta", image: pasta, content:"The in-house pasta and chicken by chef Moose", price:"N 1,000.00"},
    {id:2, foodname:"Stir Fry Pasta", image: burger, content:"The in-house pasta and chicken by chef Moose", price:"N 1,000.00"},
    {id:3, foodname:"Stir Fry Pasta", image: balls, content:"The in-house pasta and chicken by chef Moose", price:"N 1,000.00"},
   // {id:4, foodname:"Stir Fry Pasta", image: spagg, content:"The in-house pasta and chicken by chef Moose", price:"N 1,000.00"},
    //{id:5, foodname:"Stir Fry Pasta", image: bread, content:"The in-house pasta and chicken by chef Moose", price:"N 1,000.00"},
    //{id:6, foodname:"Stir Fry Pasta", image: china, content:"The in-house pasta and chicken by chef Moose", price:"N 1,000.00"},
    //{id:7, foodname:"Stir Fry Pasta", image: china, content:"The in-house pasta and chicken by chef Moose", price:"N 1,000.00"},
    

  ]
  const secondfoods = [
    {id:1, foodname:"Stir Fry Pasta", image: spagg, content:"The in-house pasta and chicken by chef Moose", price:"N 1,000.00"},
    {id:2, foodname:"Stir Fry Pasta", image: bread, content:"The in-house pasta and chicken by chef Moose", price:"N 1,000.00"},
    {id:3, foodname:"Stir Fry Pasta", image: china, content:"The in-house pasta and chicken by chef Moose", price:"N 1,000.00"},
  ]
  const [Show, setShow] = useState(false)

  const CloseHandler = ()=> setShow(false)

  
  return (
    <div className="dashboard">
      {Show ? <div onClick={CloseHandler } className="back-drop"></div> : null}

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
            <button className="btn1">6</button>
          </div>
          <div className="sideicon">
            <img src={cart} alt="icon" />
            <p>Your Cart</p>
            <button className="btn2">6</button>
          </div>
        </div>
      </div>
      <div className="mainPage">
        <div className="header">
          <div>
            <h2>Good morning, {userDetails.name} !</h2>
            <p>What delicious meal are you craving today?</p>
          </div>
          <div><img src={avatar}   alt='avatar'/></div>
        </div>
        <div className="contents">
          {
            foods && foods.map((food)=>
            <div className="cards" key={food.id}>
               <img src={food.image} className='foodImage' alt='pasta'/>
               <h2>{food.foodname}</h2>
               <p>The in-house pasta and <br/> chicken by chef Moose</p>
               <div className="addprice">
                <div className="price">{food.price}</div>
                <div><button onClick={()=>setShow(true)}>Add to cart</button></div>
               </div>

            </div>
            )
          }
        </div>
        <div className="contents">
          {
            secondfoods && secondfoods.map((secondfood)=>
            <div className="cards" key={secondfood.id}>
               <img src={secondfood.image} className='foodImage' alt='pasta'/>
               <h2>{secondfood.foodname}</h2>
               <p>The in-house pasta and <br/> chicken by chef Moose</p>
               <div className="addprice">
                <div className="price">{secondfood.price}</div>
                <div><button>Add to cart</button></div>
               </div>

            </div>
            )
          }
        </div>
        <div>
        <AddCart show={Show} close={CloseHandler} className="AddCart"/>

        </div>
      </div>
    </div>
  );
};

export default Sidebar;
