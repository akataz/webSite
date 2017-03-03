import React from "react";
import "../lib/css/landing-page.css";

import Projects from "./Projects.js";
import Splash   from "./Splash.js";
import Contact  from "./Contact.js";
import Footer from "./Footer.js"
import Header from "./NavBar.js"

const HomePage = () => {
  return (
    //  Header -->
    <div>
      <Header />
      <Splash />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default HomePage;
