import React from 'react';

import logo from '../assets/images/KL_logo_white.png';

function Logo(props) {
  return (
    <img
      alt="Logo"
      src={logo}
      {...props}
    />
  );
}

export default Logo;
