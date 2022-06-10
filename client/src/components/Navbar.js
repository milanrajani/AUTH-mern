import React from 'react'
// import logo from './Images/logo.png'
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom';
export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
    <div className="container-fluid">
      <a className="navbar-brand disabled" href="/">
          AUTH
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto mb-2  mb-lg-0">
        <li className="nav-item"><Link to="/" className="nav-link " >Home</Link></li>
        <li className="nav-item"><Link to="/About" className="nav-link " >About</Link></li>
        <li className="nav-item"><Link to="/Contact" className="nav-link " >Contact</Link></li>
        <li className="nav-item"><Link to="/Login" className="nav-link " >Login</Link></li>
        <li className="nav-item"><Link to="/signup" className="nav-link " >signup</Link></li>
         
        </ul>
         
      </div>
    </div>
  </nav>
  )
}
export default Navbar

          