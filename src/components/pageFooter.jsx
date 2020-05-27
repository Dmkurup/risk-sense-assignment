import React, { Component } from "react";
class PageFooter extends Component {
  state = {};
  render() {
    return (
      <div className="main-footer">
        <div className="container">
          <div className="row">
            {/*Column1*/}
            <div className="col">
              <h4>HUBSTAFF TALENT</h4>
            </div>
            {/*Column2*/}
            <div className="col">
              <h6>TALENT</h6>
              <ul className="list-unstyled">
                <li>How it works</li>
                <li>Wht we're free</li>
                <li>Agencies</li>
              </ul>
            </div>
            {/*Column3*/}
            <div className="col">
              <h6>HUBSTAFF</h6>
              <ul className="list-unstyled">
                <li>About</li>
                <li>Time Tracking</li>
                <li>Developer</li>
                <li>Resources</li>
              </ul>
            </div>
            {/*Column4*/}
            <div className="col">
              <h6>SUPPORT</h6>
              <ul className="list-unstyled">
                <li>Help Center</li>
                <li>Blog</li>
                <li>FAQ</li>
              </ul>
            </div>
            {/*Column5*/}
            <div className="col">
              <h6>SOCIAL</h6>
              <ul className="list-unstyled">
                <li>
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </li>
                <li>
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </li>
                <li>
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageFooter;
