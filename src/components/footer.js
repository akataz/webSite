import React from 'react';
//def loading up that css properly
import "../lib/css/landing-page.css";

const Footer = () => {

    return (
      <footer>
          <div className="container">
              <div className="row">
                  <div className="col-lg-12">
                      <ul className="list-inline">
                          <li>
                              <a href="#">Home</a>
                          </li>
                          <li className="footer-menu-divider">&sdot;</li>
                          <li>
                              <a href="#about">About</a>
                          </li>
                          <li className="footer-menu-divider">&sdot;</li>
                          <li>
                              <a href="#projects">Projects</a>
                          </li>
                          <li className="footer-menu-divider">&sdot;</li>
                          <li>
                              <a href="#contact">Contact</a>
                          </li>
                      </ul>
                      <p className="copyright text-muted small">Made with love in San Francisco</p>
                  </div>
              </div>
          </div>
      </footer>
    )
};

export default Footer;
