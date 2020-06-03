import React from "react";

import searchIcon from ".././Assets/new.png";

export default function Search({searchValue}) {
  return (
    <div
      style={{
        backgroundColor: "lightgray",
        display: "flex",
        alignItems: "center",
        padding: "2px"
      }}
    >
      <input
        type="text"
        placeholder="  Search.."
        onChange={searchValue}
        style={{
          height: "30px",
          width: "250px",
          border: "none",
          textIndent: "10px",
          color:'darkblue',
        }}
      />
      <img
        src={searchIcon}
        style={{ height: "20px", width: "20px", marginRight: "5px",  marginLeft: "5px"}}
        alt=''
      />
    </div>
  );
}






// import React, { Component } from "react";
// import SearchIcon from "../Assets/new.png";

// class Search extends Component {
//   render() {
//     return (
//       <div
//         style={{
//           backgroundColor: "white",
//           borderRadius: "7px",
//           display: "flex",
//           alignItems: "center",
//           height: "30px", padding:'4px'
//         }}
//         className="search"
//       >
//         <input
//           style={{ border: "none", height: "100%", textIndent: "5px" }}
//           type="text"
//           placeholder="Search..."
//         />
//         <img
//           style={{
//             width: "20px",
//             height: "20px",
//             marginRight: "8px"
//           }}
//           src={SearchIcon}
//         />
//       </div>
//     );
//   }
// }
// export default Search;
