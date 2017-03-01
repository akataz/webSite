import React from 'react';
//def loading up that css properly
import "../lib/css/landing-page.css";
import Footer from " ./footer.js"

const Template = () => {
    //  Navigation -->
    return (
      <div>
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
                            <a href="#about">Projects</a>
                        </li>
                        <li>
                            <a href="#services">About</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
                {/*//  /.navbar-collapse -->*/}
            </div>
            {/*//  /.container -->*/}
        </nav>


        //  Header -->
        <a name="about"></a>
        <div className="intro-header">
            <div className="container">

                <div className="row">
                    <div className="col-lg-12">
                        <div className="intro-message">
                            <h1>Tyrus Brenc</h1>
                            <h3>Software Engineer</h3>
                            <hr className="intro-divider"/>
                            <ul className="list-inline intro-social-buttons">
                                <li>
                                    <a href="https://github.com/akataz" className="btn btn-default btn-lg"><i className="fa fa-github fa-fw"></i> <span className="network-name">Github</span></a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/en/tyrusbrenc" className="btn btn-default btn-lg"><i className="fa fa-linkedin fa-fw"></i> <span className="network-name">Linkedin</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            {/*//  /.container -->*/}

        </div>
        {/*//  /.intro-header -->*/}

        {/*//  Page Content -->*/}

        <a  name="services"></a>
        <div className="content-section-a">

            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-sm-6">
                        <hr className="section-heading-spacer" />
                        <div className="clearfix"></div>
                        <h2 className="section-heading">ApexSwipe:<br /><h3>Hardware integrated realtime data sharing app</h3></h2>
                        <p className="lead">Apex Swipe is a native mobile application that allows users to build virtual "decks" to get their friends opinions using swipe touch technology. It is written in React Native with Redux for both iOS and Android, and features include hardware integration via the mobile device's camera, Yelp API queries for restaurant data, and a Heroku and AWS deployed Node/Express/MongoDB back-end for API calls and user data storage. Our team utilized Test Driven Development via Mocha and Chai, as well as AGILE to keep the development process focused and efficient.</p>
                    </div>
                    <div className="col-lg-5 col-lg-offset-2 col-sm-6">
                        <img className="img-responsive" src="../lib/img/apexSwipe.jpeg" alt=""/>
                    </div>
                </div>

            </div>
            {/*//  /.container -->*/}

        </div>
        {/*//  /.content-section-a -->*/}

        <div className="content-section-b">

            <div className="container">

                <div className="row">
                    <div className="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                        <hr className="section-heading-spacer"/>
                        <div className="clearfix"></div>
                        <h2 className="section-heading">Share Anything 2.0</h2>
                        <p className="lead">A rental service riding on React and Redux, Share Anything 2.0 is inspired by AirBnB and incorporates such features as real time product chat and integrated payment solutions.</p>
                    </div>
                    <div className="col-lg-5 col-sm-pull-6  col-sm-6">
                        <img className="img-responsive" src="../lib/img/shareAnything.png" alt=""/>
                    </div>
                </div>

            </div>
            {/*//  /.container -->*/}

        </div>
        {/*//  /.content-section-b -->*/}

        <div className="content-section-a">

            <div className="container">

                <div className="row">
                    <div className="col-lg-5 col-sm-6">
                        <hr className="section-heading-spacer"/>
                        <div className="clearfix"></div>
                        <h2 className="section-heading">Omgeo:<br />Geotagging Domain Registrar</h2>
                        <p className="lead">Create longitude and latitude based tags registered in a central repository</p>
                    </div>
                    <div className="col-lg-5 col-lg-offset-2 col-sm-6">
                        <img className="img-responsive" src="../lib/img/omgeo.png" alt=""/>
                    </div>
                </div>

            </div>
            {/*//  /.container -->*/}

        </div>
        {/*//  /.content-section-a -->*/}

        <a  name="contact"></a>
        <div className="banner">

            <div className="container">

                <div className="row">
                    <div className="col-lg-6">
                        <h2>Connect to me!</h2>
                    </div>
                    <div className="col-lg-6">
                        <ul className="list-inline banner-social-buttons">
                            <li>
                                <a href="https://github.com/akataz" className="btn btn-default btn-lg"><i className="fa fa-github fa-fw"></i> <span className="network-name">Github</span></a>
                            </li>
                            <li>
                                <a href="https://linkedin.com/in/tyrusbrenc" className="btn btn-default btn-lg"><i className="fa fa-linkedin fa-fw"></i> <span className="network-name">Linkedin</span></a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            {/*//  /.container -->*/}

        </div>
        {/*//  /.banner -->*/}

        {/*//  Footer -->*/}
        <Footer />
        {/* <footer>
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
        </footer> */}
      </div>
    )
};

export default Template;
