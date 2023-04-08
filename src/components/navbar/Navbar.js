import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div className='navbar'>
      <div className="container navbar">
        
      <Link to="/">
        <img className='con__nav__img' src="https://china-house.uz/wp-content/themes/china-house/images/logo.svg" alt="" />
      </Link>
      <Link to="/plan">
        <p>Rejalashtirish</p>
      </Link>
      <Link to="/ipoteka">
        <p>Ipoteka</p>
      </Link>
      <Link to="/contact">
        <p>Contact</p>
      </Link>
      </div>
    </div>
  )
}

export default Navbar