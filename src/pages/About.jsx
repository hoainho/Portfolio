import { CTA } from "../components";

import "react-vertical-timeline-component/style.min.css";
import Skill from "../components/About/Skill";
import Experience from "../components/About/Experience";
import Introduce from "../components/About/Introduce";

const About = () => {
  return (
    <section className="max-container">
      <Introduce />

      <Skill />

      <Experience />

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
