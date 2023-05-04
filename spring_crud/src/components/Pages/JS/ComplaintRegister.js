import { useState } from 'react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from './Navbar';
import axios from 'axios';
import emailjs from 'emailjs-com';


function ComplaintRegister() {
  const comStyle  = {
      input:{
          fontSize:'1.02rem'
      },
      textarea:{
          width:'33rem',
          height:'10rem',
          marginLeft:'6.2rem',
          fontSize:'1.02rem'  
      },
      container:{
          marginTop:'4rem'
      },
      submitComplaint:{
          backgroundColor: '#4c98af',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginRight: '1.5rem',
          fontSize: '15px'
      },
      p:{
          marginLeft:'30rem',
          color:'green',
          fontSize:'1.2rem',
      },
      attachment :{
        padding : "6px",
        resize:"none",
        marginTop:"4px"
      }
  };

  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const [complaint, setComplaint] = useState({
    username : "",
    email : "",
    contactNumber : "",
    description :"",
    // attachment :""
  });

  // const [formData, setFormData] = useState({
  //   username : "",
  //   email : "",
  //   contactNumber : "",
  //   description :""
  // });

  const {username, email, contactNumber, description} = complaint;

  const onComplaintInputChange = (e) =>{
    setComplaint({...complaint, [e.target.name]: e.target.value})

    // setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  // const onComplaintSubmitButton = async (e) =>{

    // e.preventDefault();
    // await axios.post("http://localhost:8080/registerComplaint", complaint)
    // alert("Your Complaint has been Registered !!")


    // for sending email
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
    // .then((result) => {
    //   console.log(result.text);
    //   alert('Your message was sent successfully!');
    // }, (error) => {
    //   console.log(error.text);
    //   alert('There was an error sending your message.');
    // });



  //   navigate("/")
  // };

  const onComplaintSubmitButton = async(e) => {
    
    e.preventDefault();
    await axios.post("http://localhost:8080/registerComplaint", complaint)
    setSuccess(true);
    setTimeout(Navigate, 3000)
  }
  const Navigate = () =>{
    // To reload the complaintForm
    // window.location.reload(false)
    navigate("/")
  }


  return (
    <>
      <Navbar />
        {success && <p style={comStyle.p}>Thank you! Complaint Registered Successfully!</p>}
        <div className="container" style={comStyle.container}>
          <form onSubmit={(e) => onComplaintSubmitButton(e)}>
            <h2>Register a Complaint</h2>
            <div className="input-group">
              <label htmlFor="uname">Name</label>
              <input type="text" id="uname" name="username" style={comStyle.input} value={username} onChange={(e) => onComplaintInputChange(e)} required />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" style={comStyle.input} value={email} onChange={(e) => onComplaintInputChange(e)} required />
            </div>
            <div className="input-group">
              <label htmlFor="contactNumber">Contact Number</label>
              <input type="tel" id="contactNumber" name="contactNumber" size='20' minLength='10' maxLength='14' style={comStyle.input } value={contactNumber} onChange={(e) => onComplaintInputChange(e)} required />
            </div>
            <div className="input-group">
              <label htmlFor="description">Description</label>
              <textarea name="description" id="description" style={comStyle.textarea} value={description} onChange={(e) => onComplaintInputChange(e)} required></textarea>
            </div>

            {/* <div className="input-group">
              <label htmlFor="attachment">Attachment</label>
              <input type="file" id="attachment" name="attachment" style={comStyle.attachment} value={attachment} onChange={(e) => onComplaintInputChange(e)} />
            </div> */}
            
            <div className="input-group-btn">
              <button type="submit" id="submitComplaint-btn" style={comStyle.submitComplaint} >SUBMIT COMPLAINT</button>
              <Link id="cancel-btn" to="/">Cancel</Link>
            </div>
          </form>
        </div>
    </>
  )
}

export default ComplaintRegister