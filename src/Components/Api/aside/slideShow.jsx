import React from "react";
import { Fade } from "react-slideshow-image";

import img1 from "../../../Assets/polit.jpeg";
import img2 from "../../../Assets/trump.jpg";
import img3 from "../../../Assets/too.png";

const fadeImages = [img1, img2, img3];

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,

  // onChange: (oldIndex, newIndex) => {
  //   console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  // }
};

const Slideshow = () => {
  return (
    <div className="slide-container" style={{maxWidth:'300px',  margin:'auto'}}>
      <Fade {...fadeProperties}>
        <div className="each-fade">
          <div className="image-container">
            <img
              src={fadeImages[0]}
              alt=""
              style={{ maxWidth: "300px", height: "250px" }}
            />
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
            <img
              src={fadeImages[1]}
              alt=""
              style={{  maxWidth: "300px", height: "250px" }}
            />
          </div>
        </div>

        <div className="each-fade" >
          <div className="image-container">
            <img
              // src={fadeImages[2]}
              alt=""
              style={{  maxWidth: "300px", height: "250px"  }}
            />
          </div>
        </div>
      </Fade>
    </div>
  );
};
export default Slideshow;
