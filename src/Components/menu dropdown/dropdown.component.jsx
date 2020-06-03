import React from "react";

import './dropdown.styles.css'

export default function Menu() {
  return (
      <div className="menu-icon-div">
        <div className="menu">
          <div className="divs">
            {/*menu icon */}
            <div className="div"></div>
            <div className="div"></div>
            <div className="div"></div>
          </div>

          {/*menu drop-down content */}
          <div className="drop-down-div">
            <p className="drop-down-list">Polities</p>
            <p className="drop-down-list">Science</p>
            <p className="drop-down-list">Busines</p>
            <p className="drop-down-list">Football</p>
          </div>
        </div>
      </div>
  );
}
