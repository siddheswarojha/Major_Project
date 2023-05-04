import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axios from 'axios';

function LoginUser() {

  let navigate = useNavigate();

  const [loginUser, setloginUser] = useState({
    email : "",
    password : "",
  });


  const {email, password} = loginUser;
  const onInputChange  = (e) =>{
    setloginUser({...loginUser, [e.target.name]: e.target.value})
  }

  const onSubmitButton = async (e) =>{  
    // if(password == confirmPassword && password != '' && confirmPassword != ''){
      e.preventDefault();
      // await axios.post("http://localhost:8080/loginUser", loginUser)
      // console.log(`Authenticating user ${email} with password ${password}`);
      const response = await axios.post("/loginUser", { email, password });
      console.log(response.data);
      navigate("/complaint")
    // }
    // else{
    //   setIsError("Confirm Password doesn't match !!")
    // }
  };
  
  
  

  const myStyle ={
    passShowToggle :{
      position:"absolute",
      cursor:"pointer",
      right:"31rem",
      top:"19.8rem", 
      padding: "0px",
    },
    input :{
      fontSize: "0.94rem"
    }
  }
  const [showPass, setShowPass] = useState(false)
  const onHandleShow = () =>{
    setShowPass(!showPass)
  }

  

  return (
    <>
      <Navbar />

        <div className="container">
          <form onSubmit={(e) => onSubmitButton(e)}>
            <h2>Login User</h2>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" style={myStyle.input} value={email} onChange={(e) =>onInputChange(e)} required />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type={showPass ? "text": "password"} id="password" name="password" style={myStyle.input} value={password} onChange={(e) => onInputChange(e)}  required />
              <label className="Pass" style={myStyle.passShowToggle} onClick={() => onHandleShow()}>{showPass ? <VisibilityOffIcon /> : <VisibilityIcon />}</label>
            </div>
            
            <div className="input-group-btn">
              <Link type="submit" id="register-btn" to='/complaint' >LOGIN</Link>
              <Link id="cancel-btn" to="/">Cancel</Link>
            </div>
          </form>
        </div>
    </>
  )
}

export default LoginUser