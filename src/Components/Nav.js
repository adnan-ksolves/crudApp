import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

const [nav,setNav]=useState({backgroundColor:"teal",borderRadius:"5px", color:"white"});

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
    <NavLink className="navbar-brand" to="/">School Database</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <NavLink className="nav-link my-2 px-2" to="/" style={(navData) => navData.isActive ? nav : {}}>Students</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link my-2 px-2" to="/teachers" style={(navData) => navData.isActive ? nav : {}}>Teachers</NavLink>
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default Header
