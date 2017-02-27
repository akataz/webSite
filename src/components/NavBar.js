import React from 'react';
//import {Link} from 'react-router';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

const NavBar = () => {

  return (
    <div>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Tyrus Brenc</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">Projects</NavItem>
          <NavItem eventKey={2} href="https://www.github.com/akataz">Github</NavItem>
          <NavItem eventKey={4} href="#">About</NavItem>

        </Nav>
        <Nav pullRight>
          <NavDropdown pullRight eventKey={3} title="Personal" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Recipes</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.2}>JobHunter9000</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
      <div>
        <img src={require('../tyrus_headshot.jpg')} alt="profile pic" height="400" className="profile"/>
      </div>
    </div>
  )
};


export default NavBar;
