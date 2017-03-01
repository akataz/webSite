import React from "react";

const HomePage = () => {
  return (
    //  Header -->
    <div>
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
    </div>
  )
}

export default HomePage;
