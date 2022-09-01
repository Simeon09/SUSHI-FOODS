import React,{useState} from "react";
import loginPicture from "../../Component/Images/loginPicture.svg";
import Button from "../../Component/Button";
import './sass/Signin.css';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

const Signin = () => {
    // const [passwordType, setpasswordType] = useState("password");
    // const [passwordinputType, setpasswordInputType] = useState("");
    // const handlepassword = (e) => {
    //   setpasswordInputType(e.target.value);
    // };
    // const togglePassword = (e) => {
    //   e.preventDefault();
    //   if (passwordType === "password") {
    //     setpasswordType("text");
    //     return;
    //   }
    //   setpasswordType("password");
    // };

    const [loginData, setloginData] = useState({
      email:"",
      password:"",
    })
    const  handleChange =(e)=>{
      setloginData({
        ...loginData,
        [e.target.name]: e.target.value
      })
    }
    console.log(loginData)
    const handleSubmit =(e)=>{
      e.preventDefault()
      let loginUser = JSON.parse(sessionStorage.getItem('user'))
      console.log(loginUser)
      console.log(loginData)
      if (loginData?.email == loginUser?.email && loginData?.password == loginUser?.password){
        toast.success('login successful')
        setInterval(()=>{
          window.location='/Dashboard'
        }, 2000)
      }else{
        toast.error('wrong email or password')
      }

    }
  return (
    <div className="login">
      <ToastContainer />
      <div className="loginImage" >
        <img src={loginPicture} alt="loginpicture" />
      </div>
      <div className="sublogin">
        <h2>Welcome Back!</h2>
        <form onSubmit={handleSubmit}>
          <input className="inputtag" type="email" name="email" onChange={handleChange} placeholder="Your Email address" /> <br />
          <div className="passwordTag">
            <input className="inputtag2"  placeholder="Your Password" 
            //  type={passwordType}
             onChange={handleChange}
            //  value={passwordinputType}
             name="password"
             id="password"
             required
            />
            {/* <button className="btnShow" onClick={togglePassword} >show</button> */}
          </div>{" "}
          <br />
          <Button props={"LOGIN"} />
        </form>
        <div className="create"><Link className="link" to='/Signup'>Create an account</Link>
        <Link className="link" to="">Forgot Passoword</Link></div>
      </div>
    </div>
  );
};

export default Signin;
