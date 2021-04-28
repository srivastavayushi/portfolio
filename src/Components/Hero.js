import React from "react";

import Home from "./HeroElements/Home";
import About from "./HeroElements/About";
import Experience from "./HeroElements/Experience";
import Built from "./HeroElements/Built";
import Projects from "./HeroElements/Projects";
import GetInTouch from "./HeroElements/GetInTouch";

export default function Hero() {
  return (
    <div className=" mx-60">
      <Home />
      <About />
      <Experience />
      <Built />
      <Projects />
      <GetInTouch />
    </div>
  );
}
