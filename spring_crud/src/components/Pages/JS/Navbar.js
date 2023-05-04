import React from 'react'
import '../CSS/Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/registerUser'>Register</Link></li>
          <li><Link to='/loginUser'>Login</Link></li>
          <li><Link to='/contactUs'>ContactUs</Link></li>

          <li><Link to='/password'>Admin</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar