import React from "react";
import Images from "../Images";
import Circle from "../Circle";
import TextContent from "../TextContent";
import Fade from "react-reveal/Fade";
const Events = () => {
  return (
    <section className="feature_section home_section8 bg_1" id="events">
      <div className="custom_container">
        <div className="row">
          <div className="col-md-7 my-auto">
            <Fade left>
              <TextContent
                title="Find Events around you"
                desc="Never miss important events happening near you through our AI
                  based Recommendation engine."
              >
                <Circle num="23" />
              </TextContent>
            </Fade>
          </div>
          <div className="col-md-5 text-center">
            <div className="app_img">
              <Circle num="240" />
              <Circle num="46" />
              <Circle num="50" />
              <Images src="/Images/mockup_events.png" classes="feature_model" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
