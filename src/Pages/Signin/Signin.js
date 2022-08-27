import React,{useState} from "react";
import loginPicture from "../../Component/Images/loginPicture.svg";
import Button from "../../Component/Button";
import './sass/Signin.css'

const Signin = () => {
    const [passwordType, setpasswordType] = useState("password");
    const [passwordinputType, setpasswordInputType] = useState("");
    const handlepassword = (e) => {
      setpasswordInputType(e.target.value);
    };
    const togglePassword = (e) => {
      e.preventDefault();
      if (passwordType === "password") {
        setpasswordType("text");
        return;
      }
      setpasswordType("password");
    };
  return (
    <div className="login">
      <div>
        <img src={loginPicture} alt="loginpicture" />
      </div>
      <div className="sublogin">
        <h2>Welcome Back!</h2>
        <form>
          <input className="inputtag" type="email" placeholder="Your Email address" /> <br />
          <div className="passwordTag">
            <input className="inputtag2"  placeholder="Your Password" 
             type={passwordType}
             onChange={handlepassword}
             value={passwordinputType}
             name="password"
             id="password"
             required
            />
            <button className="btnShow" onClick={togglePassword} >show</button>
          </div>{" "}
          <br />
          <Button props={"LOGIN"} />
        </form>
      </div>
    </div>
  );
};

export default Signin;
