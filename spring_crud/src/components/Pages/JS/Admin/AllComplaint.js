import React, { useEffect, useState } from 'react'
import '../../CSS/allUser.css'
import axios from 'axios';
import {Link, useParams} from 'react-router-dom'
import AdminNavbar from './AdminNavbar';

function AllUser() {

  const [complaint, setComplaint] = useState([]);

  useEffect(() =>{
    loadComplaints();
  },[])
 
  const loadComplaints = async () =>{
    const result = await axios.get("http://localhost:8080/allComplaint");
    setComplaint(result.data);
  }


  const deleteComplaint = async(id) =>{
    await axios.delete(`http://localhost:8080/deleteComplaint/${id}`)
    loadComplaints();
  }


  return (
    <>
      <AdminNavbar />
        <table style={{width:"100%"}}>
          <thead>
            <tr>
              <th>Serial No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {
              complaint.map(user =>(
               
                <tr>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.contactNumber}</td>
                  <td>{user.description}</td>
                  <td>
                    <button class="delete-button" onClick={() =>deleteComplaint(user.id)}>DELETE</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
          
        </table>

    </>
  )
}

export default AllUser