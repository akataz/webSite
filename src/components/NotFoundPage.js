import React from 'react';
import { Link } from 'react-router';

import Footer from "./Footer.js"
import Header from "./NavBar.js"

const NotFoundPage = () => {
  return (
    <div>
      <Header />
      <h4>
        404 Page Not Found
      </h4>
      <Link to="/"> Go back to homepage </Link>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
