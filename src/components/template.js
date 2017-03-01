import React from 'react';
//def loading up that css properly
import "../lib/css/landing-page.css";

//import components that make up page-need to fix consistency dtr
import Footer   from "./Footer.js";
import NavBar   from "./NavBar.js";
import Projects from "./projects.js";
import Splash   from "./splash.js";
import Contact  from "./Contact.js";


const Template = () => {
    //  Navigation -->
    return (
      <div>
        <NavBar />
        <Splash />
        <Projects />
        <Contact />
        <Footer />
      </div>
    )
};

export default Template;
