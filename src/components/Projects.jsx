import projectdata from "../assets/projectList";
import { Project } from "./Project";

const Projects = () => {
  return (
    <div className=" bg-gray-100">
      <h1 className="py-5 text-4xl font-extrabold text text-center pt-8 mx-4">
        Projects
      </h1>
      <div className="border border-solid border-l-black rounded-lg p-4 mx-4">
        <div className="flex items-center justify-center flex-wrap ml-4 ">
          {projectdata.map((project) => (
            <Project key={project.data.id} projectdta={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
