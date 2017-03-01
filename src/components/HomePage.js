import React from "react";
import "../lib/css/landing-page.css";

import Projects from "./projects.js";
import Splash   from "./splash.js";
import Contact  from "./Contact.js";

const HomePage = () => {
  return (
    //  Header -->
    <div>
      <Splash />
      <Projects />
      <Contact />
    </div>
  )
}

export default HomePage;
