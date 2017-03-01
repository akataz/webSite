import React from 'react';
//def loading up that css properly
import Footer from "./Footer.js"
import "../lib/css/landing-page.css";
import NavBar from "./NavBar.js"
import Projects from "./projects.js"


const Template = () => {
    //  Navigation -->
    return (
      <div>


        <NavBar />
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
        <Projects />
        <a  name="contact"></a>
        <div className="banner">

            <div className="container">

                <div className="row">
                    <div className="col-lg-6">
                        <h2>Connect with me!</h2>
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

      </div>
    )
};

export default Template;
