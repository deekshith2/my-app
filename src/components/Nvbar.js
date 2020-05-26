import React, { Component } from 'react'; 
import { useState } from 'react';
import {
  Navbar,NavbarBrand,  Nav,  NavItem,  NavLink
} from 'reactstrap';
import Login from '../components/Login';
import {Link} from "react-router-dom";

const Nvbar = (props) => {

  return (
    <div >
      <Navbar color="primary" light expand="md">
        <NavbarBrand href="/"><h2>College-Hostel</h2></NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to='/Login'>
                <h5 className="nav-link">Login</h5>
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/Signup'>
              <h5 className="nav-link">Signup</h5>
              </Link>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
  );
}

export default Nvbar;
