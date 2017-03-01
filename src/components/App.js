import React, { PropTypes } from 'react';
//import { Link, IndexLink } from 'react-router';
//import NavBar from './NavBar';
import 'jquery';
//  Bootstrap Core JavaScript -->
//import url('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css');
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
