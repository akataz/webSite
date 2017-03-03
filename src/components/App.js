import React, { PropTypes } from 'react';
//import { Link, IndexLink } from 'react-router';
//import NavBar from './NavBar';
import 'jquery';
import HomePage from './HomePage.js';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (
      <div>
        <HomePage />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
