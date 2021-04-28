import React from "react";
import Project from "../images/project.png";
import IconGitHub from "../Icons/Github";
import External from "../Icons/External";
export default function Built() {
  return (
    <div>
      <div className=" my-32  text-left">
        <p className="text-2xl font-bold mb-12">04. Some Things I have built</p>
        <div className="grid grid-cols-12 mb-20">
          <img src={Project} alt="project" className="col-span-7" />
          <div className=" text-right mt-8 mr-36 space-y-2 col-span-5  z-10">
            <p className="text-base">Featured Project</p>
            <p className="font-bold text-xl">Project Name</p>
            <p className=" z-10 border p-8 ">
              A nicer look at your GitHub profile and repository stats with data
              visualizations of your top languages and stars. Sort through your
              top repos by number of stars, forks, and size.
            </p>
            <p className=" py-4 text-sm">ReactJs Node Github API</p>
            <p className="flex flex-row-reverse">
              <IconGitHub />
              <External />
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className=" text-left mt-8 mr-36 space-y-2 col-span-6 ">
            <p className="text-base">Featured Project</p>
            <p className="font-bold text-xl">Project Name</p>
            <p className=" z-10 border p-8 ">
              A nicer look at your GitHub profile and repository stats with data
              visualizations of your top languages and stars. Sort through your
              top repos by number of stars, forks, and size.
            </p>
            <p className=" py-4 text-sm">ReactJs Node Github API</p>
            <p className="flex ">
              <IconGitHub />
              <External />
            </p>
          </div>
          <img src={Project} alt="project" className="col-span-6" />
        </div>
      </div>
    </div>
  );
}
