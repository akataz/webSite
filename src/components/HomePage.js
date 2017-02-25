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
const HomePage = (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">React-Bootstrap</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="#">Link</NavItem>
      <NavItem eventKey={2} href="#">Link</NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>
);

export default HomePage;
