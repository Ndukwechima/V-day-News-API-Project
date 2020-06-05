import React from "react";

import "./header.css";

import Pics from "../../Assets/too.png";

const Header = () => {
  return (
    <div className="parent_component">
      <div className="main_header">
        <div className='logo_div'>
          <img className="logo" src={Pics} alt="pic" />
        </div>
        <div className='site_name'>
          <h3>VICTORY-DAY</h3>
          <h3>WORLD NEWS</h3>
        </div>
      </div>
    </div>
  );
};
export default Header;
