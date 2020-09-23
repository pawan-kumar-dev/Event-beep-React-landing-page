import React from "react";
import Images from "../Images";
import Circle from "../Circle";
import Triangle from "../Triangle";
import TextContent from "../TextContent";
import Fade from "react-reveal/Fade";
const Connect = () => {
  return (
    <section className="feature_section home_section2 bg_1" id="connect">
      <div className="ellipse_svg2">
        <svg viewBox="0,0 10,10" width="750px" height="750px">
          <path
            className="track"
            fill="none"
            strokeWidth="0.015"
            d="M 5 5 m -4, 0 a 4,4 0 1,0 8,0 a 4,4 0 1,0 -8,0"
          ></path>
          <circle
            className="circle_move"
            fill="rgba(114, 236, 232, 0.7411764705882353)"
            r=".2"
          ></circle>
        </svg>
      </div>
      <div className="custom_container">
        <div className="row">
          <div className="col-md-7 my-auto">
            <Fade left>
              <TextContent
                title="Connect and Share with your friends and fellow collegemates"
                desc="Find your friends, send friend requests, chat with them, share status updates."
              >
                <Circle num="22" />
              </TextContent>
            </Fade>
          </div>
          <div className="col-md-5 text-center">
            <div className="app_img_right">
              <div className="square_304"></div>
              <Images
                src="/Images/mockup_college_feed.png"
                classes="feature_model"
              />

              <div className="svg4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="251.991"
                  height="241.762"
                  viewBox="0 0 251.991 241.762"
                >
                  <defs></defs>
                  <path
                    className="abc"
                    d="M211.7,134.781C237.51,162.936,168.334,247.4,109.22,247.4S-19.639,162.936,5.981,134.781,185.89,106.625,211.7,134.781Z"
                    transform="matrix(0.766, 0.643, -0.643, 0.766, 158.623, -87.411)"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Triangle />
    </section>
  );
};

export default Connect;
