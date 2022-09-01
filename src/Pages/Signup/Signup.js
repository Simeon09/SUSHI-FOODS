import React, { useState, useEffect } from "react";
 import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
import signupPicture from "../../Component/Images/signupPicture.svg";
import { Link } from "react-router-dom";
import Button from "../../Component/Button";
import "./sass/signUP.css";
const Signup = () => {
  // const [passwordType, setpasswordType] = useState("password");
   const [passwordShown, setpasswordShown] = useState(false);
  // const handlepassword = (e) => {
  //   setpasswordInputType(e.target.value);
  // };
   const togglePassword = (e) => {
    e.preventDefault();

    setpasswordShown(!passwordShown)
  //   if (passwordType === "password") {
  //     setpasswordType("text");
  //     return;
  //   }
  //   setpasswordType("password");
   };
   const [formvalid, setformvalid] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "", 
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  console.log(form)
  useEffect(() => {
    if (
      form.name !== ""&&
      form.email !==""
      
    ){
      setformvalid(true)
    }else{
      setformvalid(false)
    }

    
  
   
  }, [form.name,
      form.email,
      form.password, 
    ])
    const submitForm =(e)=>{
      e.preventDefault();
      sessionStorage.setItem('user', JSON.stringify(form))
      toast.success('sign up successful')

      setInterval(()=>{
        window.location="/Signin"
      },1500);

    
    }
  //  const twocalls = (e) =>{
  //     this.handleChange(e)
  //     this.handlepassword()
  //   }
    
  

  return (
    <div className="SignUp">
      <ToastContainer />

      <div className="signupImage">
        <img src={signupPicture} alt="signuppicture" />
      </div>
      <div className="subSignUP">
        <h2>Welcome to Lilies!</h2>
        <form onSubmit={submitForm}>
          <input className="inputtag" type="text" name="name" placeholder="Your Your First Name" onChange={handleChange}/>

          <br />
          
          <input
            className="inputtag"
            name="email"
            type="email"
            placeholder="Your Email address"
            onChange={handleChange}
          />{" "}
          <br />
          
          <div className="passwordTag">
            <input
              className="inputtag2"
              name="password"
              placeholder="Your Password"
              type={passwordShown ? "text" :"password"}
              //onChange={e => { this.handlepassword(e); this.handlepassword()}}
              onChange={handleChange}
              // onClick={togglePassword}
              //value={passwordinputType}
          
              id="password"
              required
              
            />
            
             <button className="btnShow" onClick={togglePassword}>
              show
            </button> 
          </div>{" "}
          <br />
          <Button 
          className={formvalid?"SignUp-active":"SignUp-submit"}
          type='submit'
          id='btn'
          disabled={!formvalid}
          props={"SIGN UP"} />
        </form>
        <div className="account">
          <p>
            {" "}
            Already have an account.
            <span>
              <Link className="link" to="/Signin">
                LOGIN
              </Link>
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
