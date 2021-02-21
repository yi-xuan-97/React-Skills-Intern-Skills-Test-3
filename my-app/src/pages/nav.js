import React from 'react';
import "../styles/nav.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Nav = () => {
  return (


    <div>

      <nav>

        <ul className="outter">
          <li>
            <Link to="./portfolio">PORTFOLIO</Link>
          </li>
          <li>
            <Link to="./thoughts">THOUGTS</Link>
          </li>

          <ul className="inner">
            <li>WINKLEVOSS</li>
            <li>CAPITAL</li>
          </ul>

          <li>
            <Link to="./about">ABOUT</Link>
          </li>
          <li>
            <Link to="./contact">CONTACT</Link>
          </li>
        </ul>

      </nav>


    </div>


  );
}

export default Nav;