import React from 'react';
import { Navbar } from '../../widgets/navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  );
};

export default Layout;