import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArvindProfile from "../../../static/arvind.png";
import { Padding } from "@mui/icons-material";

const contactUsStyle = {
  contactUs: {
    position: "relative",
    textAlign: "center",
    fontSize: "32px",
    // marginBottom: "60px",
    // paddingBottom: "20px",
    fontFamily: "sansSerif",
  },
  profileImg: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
  },
  icons: {
    paddingLeft: "2rem",
  },
  instgramIcon: {
    color: "#e95950",
    fontSize: "2rem",
  },
  linkedinIcon: {
    color: "#0A66C2",
    fontSize: "2rem",
    marginLeft: "1.5rem",
  },
  githubIcon: {
    color: "#171515",
    fontSize: "2rem",
    marginLeft: "1.5rem",
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  col: {
    margin: "4.5rem 5rem",
    width: "30%",
    boxShadow:"2px 8px 3px rgb(3, 212, 219)",
    padding:"3rem"
  },
};

function ContactUs() {
  return (
    <>
      <Navbar />
      <div className="Container">
        <h1 style={contactUsStyle.contactUs}>Contact Us</h1>
        <h2 style={{color:"rgb(3, 212, 219)", fontFamily: "sansSerif",}}>Get in Touch</h2>
        <div className="row" style={contactUsStyle.row}>
          <div className="col" style={contactUsStyle.col}>
            <div className="profile-img">
              <img src={ArvindProfile} style={contactUsStyle.profileImg} />
            </div>
            <h3 style={{fontFamily: "sansSerif",}}>Arvind Kumar Rana</h3>
            <div className="icon" style={{ paddingLeft: "10px" }}>
              <a href="https://www.instagram.com/arvind_rana545/?next=%2F" target="_blank">
                <InstagramIcon style={contactUsStyle.instgramIcon} />
              </a>
              <a href="https://www.linkedin.com/in/arvindkumarrana/" target="_blank">
                <LinkedInIcon style={contactUsStyle.linkedinIcon} />
              </a>
              <a href="https://github.com/Arvind0012" target="_blank">
                <GitHubIcon style={contactUsStyle.githubIcon} />
              </a>
            </div>
          </div>
          <div className="col" style={contactUsStyle.col}>
            <div className="profile-img">
              <img src={ArvindProfile} style={contactUsStyle.profileImg} />
            </div>
            <h3 style={{ paddingLeft: "2.5rem",fontFamily: "sansSerif", }}> Shoib Ansari</h3>
            <div className="icon" style={contactUsStyle.icons}>
              <a to="">
                <InstagramIcon style={contactUsStyle.instgramIcon} />
              </a>
              <a>
                <LinkedInIcon style={contactUsStyle.linkedinIcon} />
              </a>
              <a>
                <GitHubIcon style={contactUsStyle.githubIcon} />
              </a>
            </div>
          </div>
          <div className="col" style={contactUsStyle.col}>
            <div className="profile-img">
              <img src={ArvindProfile} style={contactUsStyle.profileImg} />
            </div>
            <h3 style={{ paddingLeft: "3rem",fontFamily: "sansSerif", }}>Ankit Singh</h3>
            <div className="icon" style={contactUsStyle.icons}>
              <a to="">
                <InstagramIcon style={contactUsStyle.instgramIcon} />
              </a>
              <a>
                <LinkedInIcon style={contactUsStyle.linkedinIcon} />
              </a>
              <a>
                <GitHubIcon style={contactUsStyle.githubIcon} />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <FontAwesomeIcon icon="fa-regular fa-phone" /> */}
    </>
  );
}

export default ContactUs;
