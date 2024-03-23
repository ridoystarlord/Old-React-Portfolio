import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import Experience from "../Experience/Experience";
import HeroBanner from "../HeroBanner/HeroBanner";
import Newsletter from "../Newsletter/Newsletter";
import Projects from "../Projects/Projects";
import Skill from "../Skill/Skill";

const Home = () => {
  return (
    <div>
      <HeroBanner></HeroBanner>
      <AboutMe></AboutMe>
      <Experience></Experience>
      <Skill></Skill>
      <Projects></Projects>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
