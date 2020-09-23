import React from "react";
import Images from "../Images";
import Circle from "../Circle";
import Triangle from "../Triangle";
import TextContent from "../TextContent";
import Fade from "react-reveal/Fade";
const Competitions = () => {
  return (
    <section className="feature_section home_section7" id="competitions">
      <div className="custom_container">
        <div className="row">
          <div className="col-md-7 order-md-2 my-auto">
            <Fade right>
              <TextContent
                title="Find Competitions around
                  you"
                desc="Let competitions, hackathons find you instead of searching for
                  them !"
              ></TextContent>
            </Fade>
          </div>
          <div className="col-md-5 order-md-1">
            <div className="app_img">
              <div className="svg13">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="269.764"
                  height="289.578"
                  viewBox="0 0 269.764 289.578"
                >
                  <defs></defs>
                  <path
                    className="svg13-a"
                    d="M7857.306,3786.744c-79.226,170.831,127.325,112.823,199.148,31.967S7936.531,3615.912,7857.306,3786.744Z"
                    transform="translate(676.842 -8654.867) rotate(68)"
                  ></path>
                </svg>
              </div>
              <Images
                src="/Images/mockup_competition.png"
                classes="feature_model"
              />
              <div className="svg14">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="314.424"
                  height="314.424"
                  viewBox="0 0 314.424 314.424"
                >
                  <defs></defs>
                  <g
                    className="svg14-a"
                    transform="translate(303.815) rotate(88)"
                  >
                    <circle
                      className="svg14-b"
                      cx="152"
                      cy="152"
                      r="152"
                    ></circle>
                    <circle
                      className="svg14-c"
                      cx="152"
                      cy="152"
                      r="102.5"
                    ></circle>
                  </g>
                </svg>
              </div>
              <Circle num="50" />
              <Circle num="23" />
              <Circle num="12" />
            </div>
          </div>
        </div>
      </div>
      <Triangle />
    </section>
  );
};

export default Competitions;
