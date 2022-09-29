import React from "react";
import Bread from "../../../Component/Images/bread.svg";
import './Sass/Modal.css'

const AddCart = ({show, close}) => {
  return (
    <div className="Add-to-Cart"
    style={{
        transform: show? 'translate(-0vh)' : 'translate(100vh)',

        opacity: show ? '1' : '0'
    }
    }>
        <button onClick={close}>close</button>
      <img src={Bread} alt="bread" className="foodmodal" />
      
      <h5>Blueberry Toasts and smoothie</h5>
      <p>
        Just have a single bite of this Black Forest pastry and it will all make a<br/>
         proper sense to you. The kick of cherry and rich chocolate of this super<br/>
         light, airy pastry will definitely make you feel "wow". The perfect<br/>
         combination of cherry cream and rich chocolate can provide the<br/>
        ultimate fulfillment to your dessert craving.
      </p>
      <div className="readyDetails">
        <span><p>NGN 2000.00</p></span>
        <span><p>10-20 Mins</p></span>
        <span><p>10 Pcs Avail</p></span>
      </div>
      <div>
        <span>
            <button>-</button>
            <p>2</p>
            <button>+</button>
        </span>
        <span><button>Add to cart</button></span>
      </div>
    </div>
  );
};

export default AddCart;
