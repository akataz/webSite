import React from 'react';
//import {Link} from 'react-router';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

// const HomePage = () => {
//   return (
//     <div>
//       <h1>Tyrus Brenc</h1>
//
//       <h2>Get Started</h2>
//       <ol>
//         <li>Review the <Link to="fuel-savings">demo app</Link></li>
//         <li>Remove the demo and start coding: npm run remove-demo</li>
//       </ol>
//     </div>
//   );
// };
const HomePage = () => {

  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">Tyrus Brenc</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href="#">Projects</NavItem>
        <NavItem eventKey={2} href="#">Github</NavItem>
        <NavItem eventKey={4} href="#">About</NavItem>
        <NavDropdown eventKey={3} title="Personal" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Recipes</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.2}>JobHunter</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar>
  )
};


export default HomePage;
