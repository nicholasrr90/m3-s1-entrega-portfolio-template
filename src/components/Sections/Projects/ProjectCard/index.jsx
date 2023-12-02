import ghLogo from "../../../../assets/git-icon.png";
import style from "../style.module.css";

const ProjectCard = ({ project }) => {
  const { description, name } = project;

  return (
    <li className={style.li}>
      <div className={style.div}>
        <h3 className="title3">{name}</h3>
        <img src={ghLogo} alt="#" />
      </div>

      <p className="paragraph1">{description}</p>
      <button className="link">Saiba mais</button>
    </li>
  );
};

export default ProjectCard;
