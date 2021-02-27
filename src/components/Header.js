import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
      <div className="ui secondary pointing menu">
        <Link to="/" className="item">
          Sapphire
        </Link>
        <div className="right menu">
          <Link to="/" className="item">
            All Streams
          </Link>
          <GoogleAuth />
        </div>
      </div>
  );
};

export default Header;

// Client ID: 350624068637-j1qqp1rgbhad006k7sv237s72lb0fqlv.apps.googleusercontent.com