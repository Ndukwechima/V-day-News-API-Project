import React from "react";

import "./header.css";

import Pics from "../../Assets/too.png";
import Search from '../Search'

const Header = () => {
  return (
    <div className="parent_component">
      <div className="main_header">
        <div>
          <img className="logo" src={Pics} alt="pic" />
        </div>
        <div>
          <h3>V-DAY</h3>
        </div>
        <div>
          <h3>WORLD NEWS REPORT</h3>
        </div>
        <Search />
      </div>
    </div>
  );
};
export default Header;
