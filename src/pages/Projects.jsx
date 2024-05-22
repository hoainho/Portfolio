import { Link } from "react-router-dom";

import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import useGAEventTracker from "../hooks/useGAEventTracker";

const Projects = () => {
  const GAEventTracker = useGAEventTracker('User Interaction');
  const handleTracking = (link) => {
    GAEventTracker('Direct To Link', link);
  };
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Projects
        </span>
      </h1>

      <p className="text-slate-500 mt-2 leading-relaxed">
        Throughout my career, I have worked on a diverse range of projects,
        including notable categories such as Travel, Stock Trading, Mapping,
        Financial Management, Human Information Security Management,
        Multinational Security Systems, Construction Machinery Management, and
        E-commerce. I leverage modern technologies and frameworks such as
        JavaScript, TypeScript, Node.js, Golang, Python, and PHP, with deep
        understanding and proficiency in prominent libraries such as ReactJS,
        VueJS, NestJS, NextJS, Django, Gin, and Laravel. Let's explore some of
        my standout projects below.
      </p>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="threads"
                  className="w-[80%] h-[80%] object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500 text-base">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                  onClick={() => handleTracking(project.name)}
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Projects;
