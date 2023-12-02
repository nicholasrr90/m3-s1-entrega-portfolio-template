import { projects } from "../../../data/projects";
import style from "./style.module.css";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className={style.container}>
      <h2 className="title2">Projetos</h2>
      <ul className={style.containerUL}>
        {projects.map((el, i) => (
          <ProjectCard key={i} project={el} />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
