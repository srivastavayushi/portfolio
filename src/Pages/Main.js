import React from "react";
import Navbar from "../Components/Navbar";
import Home from "../Components/Home";
import SideSocial from "../Components/SideSocial";
import Email from "../Components/Email";

export default function Main() {
  return (
    <div>
      <Navbar />
      <div class="grid grid-cols-8 gap-4" style={{ maxHeight: "90vh" }}>
        <div class="col-span-1 h-full">
          <SideSocial />
        </div>
        <div class="col-span-6 h-full">
          <Home />
        </div>
        <div class="col-span-1 h-full ">
          <Email />
        </div>
      </div>
    </div>
  );
}
