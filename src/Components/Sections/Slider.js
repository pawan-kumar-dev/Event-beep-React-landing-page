import React from "react";
import Slider from "react-slick";
import Images from "../Images";
const Sliders = () => {
  const settings = {
    className: "",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
  };
  return (
    <section className="feature_section home_section6">
      <Slider {...settings} className="slick">
        <Images src="/Images/mockup_college_dir.png" classes="feature_model" />
        <Images src="/Images/mockup_competition.png" classes="feature_model" />
        <Images src="/Images/mockup_college_feed.png" classes="feature_model" />
        <Images src="/Images/mockup_events.png" classes="feature_model" />
        <Images src="/Images/mockup_scholarship.png" classes="feature_model" />
        <Images src="/Images/mockup_prep.png" classes="feature_model" />
        <Images src="Images/mockup_internship.png" classes="feature_model" />
      </Slider>
    </section>
  );
};
export default Sliders;
