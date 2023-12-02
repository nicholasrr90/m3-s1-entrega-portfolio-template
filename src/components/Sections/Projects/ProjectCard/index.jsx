import ghLogo from "../../../../assets/git-icon.png";
import style from "../style.module.css";

const ProjectCard = (projects) => {
  return (
    <li className={style.li}>
      <div className={style.div}>
        <h3 className="title3">{projects.name}</h3>
        <img src={ghLogo} alt="#" />
      </div>

      <p className="paragraph1">{projects.description}</p>
      <button className="link">Saiba mais</button>
    </li>
  );
};

export default ProjectCard;