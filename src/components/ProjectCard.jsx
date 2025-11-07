import React from "react";

const ProjectCard = ({name}) => {
  return (
    <div className="card w-80 sm:w-96 h-fit flex flex-col rounded-2xl overflow-hidden px-4 py-5 
bg-white dark:bg-gray-800 text-black dark:text-white shadow-xl hover:scale-105 transition duration-300">

      <a href="https://hacktoberfestprojectshub.netlify.app/" target="_blank">
        <div className="header flex flex-row gap-2 items-center px-2 pb-2 w-full border-b-2">
          <div className="relative bg-blue-600 dark:bg-blue-700 rounded-2xl px-3 py-1 text-white">

            <img
              src="/card_logo.png"
              alt="logo"
              className="relative rounded-full w-16 h-16 object-cover p-1"
            />
          </div>
          <p className="relative font-semibold text-xl hover:text-white">
            {name}
          </p>

        </div>
      </a>

      <div className="description w-full text-left px-2 my-1 mt-4 text-lg">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
        itaque a laudantium enim repudiandae iste.
      </div>

      <div className="tech-stack flex flex-row flex-wrap gap-2 px-2 w-full mt-4 mb-8">
        <div className="relative bg-sky-600 rounded-2xl px-3 py-1 text-white cursor-pointer">
          hacktoberfest
        </div>
        <div className="relative bg-sky-600 rounded-2xl px-3 py-1 text-white cursor-pointer">
          http-client
        </div>
        <div className="relative bg-sky-600 rounded-2xl px-3 py-1 text-white cursor-pointer">
          javascript
        </div>
        <div className="relative bg-sky-600 rounded-2xl px-3 py-1 text-white cursor-pointer">
          nodejs
        </div>
        <div className="relative bg-sky-600 rounded-2xl px-3 py-1 text-white cursor-pointer">
          promise
        </div>
      </div>

      <div className="card-footer flex flex-row justify-center items-center gap-10 mt-2">
        <div className="border rounded-lg w-5/12 h-20 flex items-center px-3 
border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700">

          <div className="logo w-1/4 rounded-full">
            <img src="/star2.png" alt="star" className="relative" />
          </div>
          <div className="w-1/2">
            <p className="font-semibold text-xl">10000</p>
            <p>stars</p>
          </div>
        </div>
        <div className="border rounded-lg w-5/12 h-20 flex items-center px-3 
border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700">

          <div className="logo w-1/4 rounded-full">
            <img src="/radio2.png" alt="issue" className="relative" />
          </div>
          <div className="w-1/2">
            <p className="font-semibold text-xl">560</p>
            <p>issues</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
