import React from 'react';
import "../lib/css/landing-page.css";

const Projects = () => {
  return (
    <div>
        <div className="content-section-a">

            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-sm-6">
                        <hr className="section-heading-spacer" />
                        <div className="clearfix"></div>
                        <h2 className="section-heading">ApexSwipe:</h2>
                        <h3>Hardware integrated realtime data sharing app</h3>
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
        </div>
    </div>
  )
}

export default Projects;
