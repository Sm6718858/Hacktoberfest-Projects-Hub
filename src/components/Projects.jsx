import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [search, setSearch] = useState("");

  const allProjects = [
    { name: "hack-it-up" },
    { name: "portfolio-builder" },
    { name: "todo-master" },
    { name: "weather-wizard" },
    { name: "chat-connect" },
  ];

  const filteredProjects = allProjects.filter((project) =>
    project.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="py-28 px-4 sm:px-36 text-center bg-gray-100 dark:bg-gray-900 min-h-screen">


      <div className="mb-8">
        <input
          type="text"
          placeholder="Search Projects..."
          className="px-4 py-2 w-full sm:w-1/2 border border-gray-300 dark:border-gray-600 
  bg-white dark:bg-gray-700 text-black dark:text-white rounded-lg shadow"
        />

      </div>

      <div className="card__container py-4 grid lg:grid-cols-3 gap-10 place-items-center">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <ProjectCard key={index} name={project.name} />
          ))
        ) : (
          <p className="text-xl font-semibold text-gray-600">
            No projects found 😢
          </p>
        )}
      </div>

    </section>
  );
};

export default Projects;
