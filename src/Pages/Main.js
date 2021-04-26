import React from "react";
import Navbar from "../Components/Navbar";
import Home from "../Components/Home";
import SideSocial from "../Components/SideSocial";
import Email from "../Components/Email";

export default function Main() {
  return (
    <div>
      <Navbar />
      <div class="grid grid-cols-8 gap-4">
        <div class="col-span-1">
          <Email />
        </div>
        <div class="col-span-6">
          <Home />
        </div>
        <div class="col-span-1">
          <SideSocial />
        </div>
      </div>
    </div>
  );
}
