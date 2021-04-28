import React from "react";
import Folder from "../Icons/Folder";
import External from "../Icons/External";

export default function Projects() {
  const Projects = [
    {
      id: 1,
      name: "Title of the project",
      description:
        "Its just something about project. It should be way too much technical to understand. I am writing this because I have to write a lengthy text.",
      tech: "ReactJs NodeJs Tailwind",
    },
    {
      id: 2,
      name: "Title of the project",
      description:
        "Its just something about project. It should be way too much technical to understand. I am writing this because I have to write a lengthy text.",
      tech: "ReactJs NodeJs Tailwind",
    },
    {
      id: 3,
      name: "Title of the project",
      description:
        "Its just something about project. It should be way too much technical to understand. I am writing this because I have to write a lengthy text.",
      tech: "ReactJs NodeJs Tailwind",
    },
    {
      id: 4,
      name: "Title of the project",
      description:
        "Its just something about project. It should be way too much technical to understand. I am writing this because I have to write a lengthy text.",
      tech: "ReactJs NodeJs Tailwind",
    },
    {
      id: 5,
      name: "Title of the project",
      description:
        "Its just something about project. It should be way too much technical to understand. I am writing this because I have to write a lengthy text.",
      tech: "ReactJs NodeJs Tailwind",
    },
    {
      id: 6,
      name: "Title of the project",
      description:
        "Its just something about project. It should be way too much technical to understand. I am writing this because I have to write a lengthy text.",
      tech: "ReactJs NodeJs Tailwind",
    },
    // {
    //   id: 7,
    //   name: "Title of the project",
    //   description:
    //     "Its just something about project. It should be way too much technical to understand. I am writing this because I have to write a lengthy text.",
    //   tech: "ReactJs NodeJs Tailwind",
    // },
    // {
    //   id: 8,
    //   name: "Title of the project",
    //   description:
    //     "Its just something about project. It should be way too much technical to understand. I am writing this because I have to write a lengthy text.",
    //   tech: "ReactJs NodeJs Tailwind",
    // },
    // {
    //   id: 9,
    //   name: "Title of the project",
    //   description:
    //     "Its just something about project. It should be way too much technical to understand. I am writing this because I have to write a lengthy text.",
    //   tech: "ReactJs NodeJs Tailwind",
    // },
    // {
    //   id: 10,
    //   name: "Title of the project",
    //   description:
    //     "Its just something about project. It should be way too much technical to understand. I am writing this because I have to write a lengthy text.",
    //   tech: "ReactJs NodeJs Tailwind",
    // },
    // {
    //   id: 11,
    //   name: "Title of the project",
    //   description:
    //     "Its just something about project. It should be way too much technical to understand. I am writing this because I have to write a lengthy text.",
    //   tech: "ReactJs NodeJs Tailwind",
    // },
    // {
    //   id: 12,
    //   name: "Title of the project",
    //   description:
    //     "Its just something about project. It should be way too much technical to understand. I am writing this because I have to write a lengthy text.",
    //   tech: "ReactJs NodeJs Tailwind",
    // },
  ];

  return (
    <div>
      <div className=" my-32  text-center space-y-8">
        <p className="text-2xl font-bold">04. Other Noteworthy Projects</p>
        <h1>view the archive</h1>
        <div class="grid grid-cols-3 gap-4">
          {Projects.map((project) => {
            return (
              <div className="p-4 border-2 border-purple-500 ">
                <div className="flex justify-between my-2">
                  <Folder />
                  <External className="" />
                </div>
                <div className="text-left space-y-4 mt-8">
                  <p className="text-xl font-extrabold ">{project.name}</p>
                  <p className="text-base">{project.description}</p>
                  <p className="text-sm ">{project.tech}</p>
                </div>
              </div>
            );
          })}
        </div>
        <button className="border-2 border-purple-500 px-4 py-2 rounded ">
          Show More
        </button>
      </div>
    </div>
  );
}
