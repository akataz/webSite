import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import NavBar from './components/NavBar';
//import FuelSavingsPage from './containers/FuelSavingsPage'; // eslint-disable-line import/no-named-as-default
import AboutPage from './components/AboutPage.js';
import NotFoundPage from './components/NotFoundPage.js';
import Template from './components/template.js'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Template}/>
    <Route path="about" component={AboutPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
