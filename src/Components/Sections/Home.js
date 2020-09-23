import React from "react";
import Images from "../Images";
import Circle from "../Circle";
import Triangle from "../Triangle";
import Google from "../Google";
import Typed from "react-typed";
const Home = () => {
  return (
    <section className="home_section1">
      <div className="custom_container home_screen_section">
        <div className="row">
          <div className="col-md-6 text-center text-md-left">
            <div className="app_img">
              <Circle num="254" />
              <Circle num="24" />
              <Circle num="56" />
              <Images src="/Images/mockup_college_feed.png" />
              <div className="svg1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="451.571"
                  height="393.768"
                  viewBox="0 0 451.571 393.768"
                >
                  <defs></defs>
                  <path
                    className="aa path"
                    d="M9652.548,854.245c-44.753,49.775,65.263,217.439,275.973,165.917s205.659-443.337,68.061-376.371S9697.3,804.47,9652.548,854.245Z"
                    transform="translate(-9642.672 -636.116)"
                  ></path>
                </svg>
              </div>
              <Circle num="46" />
              <Circle num="56" />
            </div>
          </div>
          <div className="col-md-6 text-center text-md-right py-4">
            <div className="about_app animated">
              <div
                className="wow fadeInUp"
                data-wow-delay=".7s"
                style={{
                  animationName: "fadeInUp",
                  animationDelay: "0.7s",
                }}
              >
                <h4 className="metropolis_regular font_30">
                  <Typed
                    strings={["WELCOME TO", "The College Social Network"]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                  ></Typed>
                </h4>
              </div>
              <div
                className="wow fadeInUp"
                data-wow-delay=".7s"
                style={{
                  animationName: "fadeInUp",
                  animationDelay: "0.7s",
                }}
              >
                <Google />
                <h5
                  className="metropolis_semibold font_small wow fadeInUp"
                  data-wow-delay=".3s"
                  style={{
                    animationDelay: "0.5s",
                    animationName: "fadeInUp",
                  }}
                >
                  Download App Now
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Circle num="22" />
      <Triangle />
    </section>
  );
};

export default Home;
