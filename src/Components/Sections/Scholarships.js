import React from "react";
import Images from "../Images";
import Circle from "../Circle";
import Triangle from "../Triangle";
import TextContent from "../TextContent";
import Fade from "react-reveal/Fade";
const Scholarships = () => {
  return (
    <section className="feature_section home_section6 bg_3" id="scholarships">
      <div className="circle_46"></div>
      <Circle num="46" />
      <div className="svg11">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="451"
          height="451"
          viewBox="0 0 451 451"
        >
          <defs></defs>
          <g className="svg11-a">
            <circle
              className="svg11-b"
              cx="225.5"
              cy="225.5"
              r="225.5"
            ></circle>
            <circle className="svg11-c" cx="225.5" cy="225.5" r="225"></circle>
          </g>
        </svg>
      </div>
      <div className="custom_container">
        <div className="row">
          <div className="col-md-7 my-auto">
            <Fade left>
              <TextContent
                title="Find Scholarships best suited for you"
                desc="Easily find scholarships that match your profile through our
                  scholarship listings."
              >
                <Circle num="46" />
              </TextContent>
            </Fade>
          </div>
          <div className="col-md-5 text-center">
            <div className="app_img">
              <div className="square_304"></div>
              <Circle num="25" />
              <Images
                src="Images/mockup_internship.png"
                classes="feature_model"
              />
              <div className="svg12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="400.131"
                  height="326.119"
                  viewBox="0 0 400.131 326.119"
                >
                  <defs></defs>
                  <path
                    className="svg12-a"
                    d="M358,179A179,179,0,0,1,0,179Z"
                    transform="translate(-84.035 10.023) rotate(-28)"
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

export default Scholarships;
