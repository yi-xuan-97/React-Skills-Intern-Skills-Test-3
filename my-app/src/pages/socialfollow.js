import React from 'react';
import '../styles/socialfollow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const Social = () => {

  return (
    <div className="container">

      <div className="icons">

        <a href="https://twitter.com/winklevosscap">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>

        <a href="https://www.instagram.com/winklevosscap/">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>

      </div>

      <p>© Winklevoss Capital Management, LLC, 2021. All Rights Reserved. <a href="https://winklevosscapital.com/terms/">Terms of Service</a> </p>

    </div>
  );

}

export default Social;