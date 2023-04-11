import React from 'react'
import "./Admin.css"
import Create from "./create/Create"
import Contact from '../contact/Contact'
import {Routes, Route, NavLink} from "react-router-dom"

function Admin() {
  return (
    <div className='admin'>
        <div className="admin__sidebar">
            <h2 className='admin__tit'>Sidebar</h2>
            <ul>
                <li><NavLink className={({isActive})=> isActive ? "nav__link nav__active" : "nav__link" } to={'contact'}>Contact</NavLink></li>
                <li><NavLink className={({isActive})=> isActive ? "nav__link nav__active" : "nav__link" } to={'create'}>Create</NavLink></li>
                <li><NavLink className={({isActive})=> isActive ? "nav__link nav__active" : "nav__link" } to={'/'}>Home</NavLink></li>
            </ul>
        </div>
        <div className="admin__content">
            <Routes>
                <Route path='create' element={<Create/>}/>
                <Route path='contact' element={<Contact/>}/>
            </Routes>
        </div>
    </div>
  )
}

export default Admin