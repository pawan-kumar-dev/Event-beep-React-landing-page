import React from "react";
import Home from "./Sections/Home";
import Connect from "./Sections/Connect";
import College from "./Sections/College";
import Intern from "./Sections/Intern";
import Jobs from "./Sections/Jobs";
import Scholarships from "./Sections/Scholarships";
import Competitions from "./Sections/Competitions";
import Events from "./Sections/Events";
import Sliders from "./Sections/Slider";
const MainSection = () => {
  return (
    <section className="main_sec home_page">
      <Home />
      <Connect />
      <College />
      <Intern />
      <Jobs />
      <Scholarships />
      <Competitions />
      <Events />
      <Sliders />
    </section>
  );
};

export default MainSection;
