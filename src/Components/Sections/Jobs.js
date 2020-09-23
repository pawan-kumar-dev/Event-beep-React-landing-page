import React from "react";
import Images from "../Images";
import Circle from "../Circle";
import Triangle from "../Triangle";
import TextContent from "../TextContent";
import Fade from "react-reveal/Fade";
const Jobs = () => {
  return (
    <section className="feature_section home_section5" id="jobs">
      <div className="custom_container">
        <div className="row">
          <div className="col-md-7 order-md-2 my-auto">
            <Fade right>
              <TextContent
                title="Prepare for Jobs and Higher Studies"
                desc="Prepare for Placements, CAT, GATE or Government Exams through
                  hundreds of actual pattern Mock Tests and previous papers."
              >
                <Circle num="46" />
              </TextContent>
            </Fade>
          </div>
          <div className="col-md-5 order-md-1">
            <div className="app_img">
              <Circle num="24" />
              <div className="svg10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="400.331"
                  height="386.904"
                  viewBox="0 0 400.331 386.904"
                >
                  <defs></defs>
                  <path
                    className="svg10"
                    d="M8462.153,3828.512c-32.819-85.028,54.733-315.462,170.147-196.827s176.1,164.472,94,202.219S8494.974,3913.54,8462.153,3828.512Z"
                    transform="translate(9577.251 -220.791) rotate(154)"
                  ></path>
                </svg>
              </div>
              <Images src="/Images/mockup_prep.png" classes="feature_model" />
              <Circle num="240" />
            </div>
          </div>
        </div>
      </div>
      <Triangle />
    </section>
  );
};

export default Jobs;
