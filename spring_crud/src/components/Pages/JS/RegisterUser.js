import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../CSS/registerUser.css'
import Navbar from './Navbar';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import GoogleLoginButton from './GLogin';


const RegisterUser = () => {

  let navigate = useNavigate();

  const [user, setUser] = useState({
    username : "",
    email : "",
    password : "",
    confirmPassword:""
  });

  const [isError, setIsError] = useState('');


  const {username, email, password, confirmPassword} = user;
  const onInputChange  = (e) =>{
    setUser({...user, [e.target.name]: e.target.value})
  }

  const onSubmitButton = async (e) =>{  
    if(password === confirmPassword && password !== '' && confirmPassword !== ''){
      e.preventDefault();
      await axios.post("http://localhost:8080/registerUser", user)
      navigate("/complaint")
    }
    else{
      setIsError("Confirm Password doesn't match !!")
    }
  };


  const [passShow, setShowPass] = useState(false)
  const [confirmPassShow, setConfirmPassShow] = useState(false)
  const myStyle = {
    passToggle :{
      position:"absolute",
      cursor:"pointer",
      right:"31rem",
      top:"24.3rem", 
      padding: "0px",
    },
    cPasswordToggle :{
      position:"absolute",
      cursor:"pointer",
      right:"31rem",
      top:"28.5rem", 
      padding: "0px"
    },
    input :{
      fontSize:"0.94rem"
    }
  }

  const PasswordShow = () =>{
    setShowPass(!passShow)
  }

  const confirmPasswordShow = () =>{
    setConfirmPassShow(!confirmPassShow)
  }
  


  return (
    <>  
      <Navbar />
      
        <div className="container">
          <div style={{position:"absolute", top:20, alignSelf:"center", margin:"2rem 17rem"}}>
            {isError}
          </div>
          <form onSubmit={(e) => onSubmitButton(e)}>
            <h2>Register User</h2>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" style={myStyle.input}  value={username} onChange={(e) => onInputChange(e)} required />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" style={myStyle.input} value={email} onChange={(e) => onInputChange(e)} required />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type={passShow ? "text": "password"} id="password" name="password" style={myStyle.input}  value={password} onChange={(e) => onInputChange(e)} required />
              <label className="cPass" style={myStyle.passToggle} onClick={() => PasswordShow()}>{passShow ? <VisibilityOffIcon />: <VisibilityIcon />}</label>
            </div>
            <div className="input-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input type={confirmPassShow ? "text": "password"} id="confirmPassword" name="confirmPassword" style={myStyle.input}  value={confirmPassword } onChange={(e) =>onInputChange(e)} required />
              <label className="cPass" style={myStyle.cPasswordToggle} onClick={() => confirmPasswordShow()}>{confirmPassShow ? <VisibilityOffIcon />: <VisibilityIcon />}</label>
            </div>
            <div className="input-group-loginBtn">
              <small>Have an account </small>
              <Link id='login' to='/loginUser'>login</Link>
            </div>
            <div >
              <p style={{margin:"2px 19.9rem"}}>------- or -------</p>
            </div>

            <div className="input-group-loginBtn">
              <GoogleLoginButton />
            </div>

            <div className="input-group-btn">
              <button type="submit" id="register-btn">REGISTER</button>
              <Link id="cancel-btn" to="/">Cancel</Link>
            </div>
          </form>
        </div>
    </>
  );
};

export default RegisterUser;
