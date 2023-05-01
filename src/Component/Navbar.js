import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <NavLink to={"/"} className="nav-link">Home</NavLink>
      </li>
        <li className="nav-item">
            <NavLink to={"/render"} className="nav-link">Rendering</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to={"/aboutus"} className="nav-link">About Us</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to={"/books"} className="nav-link">Books</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to={"/services"} className="nav-link">Services</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>


    </>
  )
}

export default Navbar