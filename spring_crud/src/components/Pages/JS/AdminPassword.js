import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import '../CSS/registerUser.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function AdminPassword() {

  const navigate = useNavigate();
  const [isError, setIsError] = useState('');
  const [adminPass, setAdminPass] = useState({adminPassword : 'Admin@123'});
  // const defaultPass = "Admin@123";

  const {adminPassword} =adminPass;

  const onInputChange = (e) =>{
    setAdminPass({...adminPass, [e.target.name]: e.target.value})
  }

  const onPassSubmit = (e) =>{

    // navigate("/admin")

    if(adminPassword){
      alert("ara")
      navigate('/admin')
    }
    else{
      setIsError("Incorrect Password !!")
    }
  }


  const myStyle = {
      margin:'2rem',
      h3:{
          margin:'5rem auto',
          fontSize:'1.6rem'
      },
      label:{
          margin:'1.2rem',
          marginLeft:'24rem'
      },
      input:{
        width: '35rem',
        fontSize: "0.94rem"
      },
      showToggle: {
        position:"absolute",
        cursor:"pointer",
        right:"30.5rem",
        top:"16.5rem", 
        padding: "0px"
      }
  };

    const [showPass, setShowPass] = useState(false)
    const onShowPass =() =>{
      setShowPass(!showPass)
    }

  return (
    <>
        <form onSubmit={(e) => onPassSubmit(e)}>
        <div style={{position:"absolute", top:20, alignSelf:"center", margin:"9rem 17rem"}}>
            {isError}
          </div>
            <h3 style={myStyle.h3}>Enter Password for Admin Panel !!</h3>
            <div className="input-group">
              <label htmlFor="password" style={myStyle.label}>Password</label>
              <input type={showPass ? "text": "password"} placeholder='Enter Admin Password' id="password" name="adminPassword" style={myStyle.input} value={adminPassword} onChange={(e) =>onInputChange(e)}  required />
              <label className="Pass" style={myStyle.showToggle} onClick={() => onShowPass()}>{showPass ? <VisibilityOffIcon /> : <VisibilityIcon />}</label>
            </div>
            
            <div className="input-group-btn">
              <Link type="submit" id="register-btn" to='/admin'>LOGIN</Link>
              <Link id="cancel-btn" to="/">Cancel</Link>
            </div>
        </form>
    </>
  )
}

export default AdminPassword