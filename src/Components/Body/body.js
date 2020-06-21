import React from "react";
import { Fade } from "react-slideshow-image";

//importing slideshowimages
import img1 from "../../Assets/water.jpg";
import img2 from "../../Assets/1.jpg";
import img3 from "../../Assets/scitech.jpg";



// import Button from "../Buttons/buttons";
import ApiData from "../Api/api";
// import Menu from "../menu dropdown/dropdown.component";

import "./body.css";

const fadeImages = [img1, img2, img3];

const fadeProperties = {
  duration: 50000,
  transitionDuration: 500,
  infinite: true,
  indicators: false
};

const Body = () => {
  return (
    <div>
      <div className="parent_body">
        <div style={{ width: "100%", height: "100%" }}>
          <Fade {...fadeProperties}>
            <div className="each-fade">
              <div className="image-container">
                <img
                  src={fadeImages[0]}
                  alt=""
                  style={{ width: "100%", height: "400px" }}
                /> 
              </div>
            </div>

            <div className="each-fade">
              <div className="image-container">
                <img
                  src={fadeImages[1]}
                  alt=""
                  style={{ width: "100%", height: "400px" }}
                />
              </div>
            </div>
             <div className="each-fade">
              <div className="image-container">
                <img
                  src={fadeImages[2]}
                  alt=""
                  style={{ width: "100%", height: "400px" }}
                />
              </div>
            </div> 
          </Fade>
        </div>
        {/* <Menu /> */}
      </div>

      {/* <Button /> */}
      <ApiData />
    </div>
  );
};
export default Body;
