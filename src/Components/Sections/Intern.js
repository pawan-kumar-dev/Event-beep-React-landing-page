import React from "react";
import Images from "../Images";
import Circle from "../Circle";
import Triangle from "../Triangle";
import TextContent from "../TextContent";
import Fade from "react-reveal/Fade";
const Intern = () => {
  return (
    <section className="feature_section home_section4 bg_2" id="intern">
      <Circle num="28" />
      <div className="custom_container">
        <div className="row">
          <div className="col-md-7 or my-auto">
            <Fade left>
              <TextContent
                title="Browse and Apply for Internships"
                desc="Find internship opportunities that are relevant to your
                  profile in companies that are near to you."
              >
                <Circle num="15" />
              </TextContent>
            </Fade>
          </div>
          <div className="col-md-5 text-center">
            <div className="app_img">
              <div className="svg7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="399.895"
                  height="330.119"
                  viewBox="0 0 399.895 330.119"
                >
                  <defs></defs>
                  <path
                    className="x"
                    d="M358,179A179,179,0,0,1,0,179Z"
                    transform="matrix(-0.875, 0.485, -0.485, -0.875, 486.676, 313.114)"
                  ></path>
                </svg>
              </div>
              <Images
                src="/Images/mockup_scholarship.png"
                classes="feature_model"
              />
              <div className="svg8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="358.854"
                  height="355.35"
                  viewBox="0 0 358.854 355.35"
                >
                  <defs></defs>
                  <path
                    className="s8"
                    d="M7861.039,3821.265c-95.83,239.173,154.009,157.958,240.886,44.755S7956.868,3582.092,7861.039,3821.265Z"
                    transform="matrix(0.94, 0.342, -0.342, 0.94, -6006.799, -6158.553)"
                  ></path>
                </svg>
              </div>
              <Circle num="66" />
            </div>
          </div>
        </div>
      </div>
      <div className="svg9">
        <svg viewBox="0,0 10,10" width="750px" height="750px">
          <path
            className="track"
            fill="none"
            strokeWidth="0.015"
            d="M 5 5 m -4, 0 a 4,4 0 1,0 8,0 a 4,4 0 1,0 -8,0"
          ></path>
          <circle className="circle_move" fill="#707070" r=".2"></circle>
        </svg>
      </div>
      <Triangle />
    </section>
  );
};

export default Intern;
