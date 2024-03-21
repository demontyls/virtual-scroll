import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style.scss'

const Navbar = () => {
  return (
    <nav className="navbar navbar-light fixed-top bg-light px-3">
      <NavLink className="navbar-brand" to="/home">Home</NavLink>
      <NavLink className="navbar-brand" to="/post">Detail post</NavLink>
    </nav>
  );
};

export default Navbar;