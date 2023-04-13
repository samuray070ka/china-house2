import React, {useState} from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"
import {BiMenuAltRight} from "react-icons/bi"
import logo from "../../assets/logo.png"

function Navbar() {
  const [show, setShow] = useState(false)

  return (
    <div className='navbar'>
      <div className="container navbar__wrapper">
        
      <Link onClick={() => setShow(false)} className='nav__logo' to="/">
        <img  src={logo} alt="" />
      </Link>
      <ul  className={`nav__collection ${show?"nav__show": ""}`}>
        <li onClick={() => setShow(false)} className="nav__item">
          <Link to="/plan">
            <span>Rejalashtirish</span>
          </Link>
        </li>
        <li onClick={() => setShow(false)} className="nav__item">
          <Link to="/ipoteka">
            <span>Ipoteka</span>
          </Link>
        </li>
        <li onClick={() => setShow(false)} className="nav__item">
          <Link to="/contact">
            <span>Contact</span>
          </Link>
        </li>
        <li onClick={() => setShow(false)} className="nav__item">
          <Link to="/about">
            <span>About</span>
          </Link>
        </li>
        {/* <li onClick={() => setShow(false)} className="nav__item">
          <Link to="/admin">
            <span>Admin</span>
          </Link>
        </li> */}
      </ul>
      <BiMenuAltRight onClick={() => setShow(p => !p)} className='nav__menu'/>
      </div>
    </div>
  )
}

export default Navbar