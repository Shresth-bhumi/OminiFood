import React from "react";
import { Col } from "react-bootstrap";
import "./footer.css";
import facebookLogo from "../../icons/ionicons/logo-facebook.svg";
import googleLogo from "../../icons/ionicons/logo-google.svg";
import instagramLogo from "../../icons/ionicons/logo-instagram.svg";
import twitterLogo from "../../icons/ionicons/logo-twitter.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <Col xs={12} s={12} md={8} lg={8} className="mt-4">
            <ul className="list-unstyled d-flex footer-nav">
              <li className="mr-4 ">
                <Link to="#">About us</Link>
              </li>
              <li className="mr-4">
                <Link to="#">Blog</Link>
              </li>
              <li className="mr-4">
                <Link to="#">Press</Link>
              </li>
              <li className="mr-4">
                <Link to="#">iOS App</Link>
              </li>
              <li className="mr-4">
                <Link to="#">Android App</Link>
              </li>
            </ul>
          </Col>
          <Col xs={12} s={12} md={4} lg={4} className="mt-4 d-flex justify-content-end">
            <ul className="list-unstyled d-flex social-links">
              <li className="mr-4">
                <Link to="#">
                  <img
                    className="icon-small"
                    src={facebookLogo}
                    alt="facebook logo"
                  />
                </Link>
              </li>
              <li className="mr-4">
                <Link to="#">
                  <img
                    className="icon-small fill-grey"
                    src={twitterLogo}
                    alt="twitter logo"
                  />
                </Link>
              </li>
              <li className="mr-4 fill-white">
                <Link to="#">
                  <img
                    className="icon-small"
                    src={googleLogo}
                    alt="google logo"
                  />
                </Link>
              </li>
              <li className="mr-4">
                <Link to="#">
                  <img
                    className="icon-small"
                    src={instagramLogo}
                    alt="instagram logo"
                  />
                </Link>
              </li>
            </ul>
          </Col>
        </div>
        <div className="mt-4 text-center copyright">
         
          
        </div>
      </div>
    </footer>
  );
};
export default Footer;
