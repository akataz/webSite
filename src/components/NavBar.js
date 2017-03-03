import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  return (

    <nav className="navbar navbar-default navbar-fixed-top topnav" role="navigation">
        <div className="container topnav">
            {/*Brand and toggle get grouped for better mobile display*/}
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand topnav" href="#">Tyrus Brenc</a>
            </div>
            {/*//  Collect the nav links, forms, and other content for toggling -->*/}
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <Link to="about">Projects</Link>
                    </li>
                    <li>
                        <Link to="about">About</Link>
                    </li>
                    <li>
                        <Link to="contact">Contact</Link>
                    </li>
                </ul>
            </div>
            {/*//  /.navbar-collapse -->*/}
        </div>
        {/*//  /.container -->*/}
    </nav>
  )
}

export default Navbar;
