import React from "react";

import searchIcon from "../../Assets/new.png";

export default function Search({ searchValue }) {
  return (
    <div
      style={{
        backgroundColor: "#f5f0f0",
        display: "flex",
        alignItems: "center",
        justifyContent:'space-between',
        width:'250px',
        padding: "2px",
        border:'none',
        borderBottom:'2px solid darkblue',
        borderRadius:'10px'
      }}
    >
      <input
        type="text"
        placeholder="  Search.."
        onChange={searchValue}
        style={{
          height: "30px",
          width: "225px",
          border: "none",
          textIndent: "10px",
          color: "darkblue",
          backgroundColor:'transparent'
        }}
      />
      <img
        src={searchIcon}
        style={{
          height: "20px",
          // width: "20px",
        }}
        alt=""
      />
    </div>
  );
}
