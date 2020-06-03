import React from "react";

import Slideshow from "./slideShow";

export default function Aside() {
  return (
    <aside
      style={{
        width: "30%",
        backgroundColor: "#f4f4e9",
        padding: "5px"
      }}
    >
      <div
        style={{
          boxShadow: "5px 10px 10px gray",
          overflow: "hidden",
          maxHeight: "20rem",
          textAlign:'center',
        }}
      >
        <Slideshow />
      </div>
    </aside>
  );
}
