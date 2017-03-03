import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App           from './components/App';
import NavBar        from './components/NavBar';
import AboutPage     from './components/AboutPage.js';
import NotFoundPage  from './components/NotFoundPage.js';
import HomePage      from './components/HomePage.js';
import Contact       from './components/Contact.js'

export default (
  <Route path="/">
    <IndexRoute component={HomePage}/>
    <Route path="about" component={NotFoundPage}/>
    <Route path="contact" component={Contact}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
