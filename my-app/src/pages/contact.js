import React from "react";
import "../styles/contact.css";
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Rectangle, Circle, Ellipse, Line, Polyline, CornerBox, Triangle } from 'react-shapes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faInstagram,
  faLinkedin,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {


  return (

    <div>

      <h1>contact page</h1>

      <div className="outtercontain">



        <div className="ciclecontain">
          <div className="text">If you build it, we will find you :)</div>
          <Circle r={300} fill={{ color: '#FFFFFF' }} stroke={{ color: '#E65243' }} strokeWidth={0}>
          </Circle>
        </div>

        <div className="reccontain">
          <table>
              <tr className="t">
                Follow us
              </tr>
              <tr className="soicon">
                <a href="https://twitter.com/winklevosscap">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>

                <i />

                <a href="https://www.instagram.com/winklevosscap/" className="sec">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>

                <a href="https://www.linkedin.com/company/winklevoss-capital" className="sec">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>

                <i />

                <a href="https://www.facebook.com/WinklevossCapital" className="sec">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
              </tr>

              <div className="se">

              <tr className="t">
                PRESS INQUIRIES
              </tr>
              <tr>
                press@winklevosscapital.com
              </tr>
              </div>

            <div className="thir">


              <tr>
                SUBSCRIBE
              </tr>
              <tr>
                <input type="email" placeholder="Your email"></input>
                <button>Subscribe</button>
              </tr>

            </div>
          </table>
        </div>
      </div>

    </div>


  );
}

export default Contact;