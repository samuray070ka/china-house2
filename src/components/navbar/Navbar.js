import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <nav className='navbar'>
      <Link to="/">
        <p>Asosiy</p>
      </Link>
      <Link to="/plan">
        <p>Rejalashtirish</p>
      </Link>
      <Link to="/contact">
        <p>To'lov rejasi</p>
      </Link>
      <Link to="/ipoteka">
        <p>Ipoteka</p>
      </Link>
    </nav>
  )
}

export default Navbar