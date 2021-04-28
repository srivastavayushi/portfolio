import React from "react";
import IconGitHub from "./Icons/Github";
import IconInstagram from "./Icons/Instagram";
import IconLinkedin from "./Icons/LinkedIn";
import IconTwitter from "./Icons/Twitter";

export default function SideSocial() {
  return (
    <div className="fixed bottom-40 left-16 space-y-4  flex flex-col">
      <IconGitHub className="h-1" />
      <IconInstagram className="h-1" />
      <IconLinkedin className="h-1" />
      <IconTwitter className="h-1" />
    </div>
  );
}
