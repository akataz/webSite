import React from "react";

const Contact = () => {
  return (
    <div>
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
    </div>
  )
}

export default Contact;
