import React from "react";

import Home from "./HeroElements/Home";
import About from "./HeroElements/About";
import Experience from "./HeroElements/Experience";
import Projects from "./HeroElements/Projects";
import GetInTouch from "./HeroElements/GetInTouch";

export default function Hero() {
  return (
    <div className="border-2 border-red-500 mx-60">
      <Home />
      <About />
      <Experience />
      <Projects />
      <GetInTouch />
    </div>
  );
}
