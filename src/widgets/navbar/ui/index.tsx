import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style.scss'

const Navbar = () => {
  return (
    <nav className="navbar navbar-light fixed-top px-3">
      <NavLink className="navbar-brand" to="virtual-scroll">Home</NavLink>
      <NavLink className="navbar-brand" to="/post">Detail post</NavLink>
    </nav>
  );
};

export default Navbar;