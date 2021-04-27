import React from "react";
import IconGitHub from "./Icons/Github";
import IconInstagram from "./Icons/Instagram";
import IconLinkedin from "./Icons/LinkedIn";
import IconTwitter from "./Icons/Twitter";

export default function SideSocial() {
  return (
    <div className="space-y-4 h-full flex flex-col justify-end">
      <IconGitHub className="" />
      <IconInstagram className="h-1" />
      <IconLinkedin className="h-1" />
      <IconTwitter className="h-1" />
    </div>
  );
}
