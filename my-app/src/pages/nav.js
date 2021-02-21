import React from 'react';
import "../styles/nav.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Nav = () => {
  return (


    <div>

      <nav>

        <ul className="outter">
          <li>
            <Link style={{ textDecoration: 'none' }} to="/portfolio">PORTFOLIO</Link>
          </li>
          <li>
            <Link style={{ textDecoration: 'none' }} to="/thoughts">THOUGTS</Link>
          </li>

          <ul className="inner">
            <Link style={{ textDecoration: 'none' }} to="/main">WINKLEVOSS <br/> CAPITAL</Link>
          </ul>

          <li>
            <Link style={{ textDecoration: 'none' }} to="/about">ABOUT</Link>
          </li>
          <li>
            <Link style={{ textDecoration: 'none' }} to="/contact">CONTACT</Link>
          </li>
        </ul>

      </nav>


    </div>


  );
}

export default Nav;