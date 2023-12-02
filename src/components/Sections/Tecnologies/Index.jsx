import { technologies } from "../../../data/technologies";
import TecnologiesCard from "./TecnologiesCard";
import style from "./style.module.css"

const Tecnologies = () => {
  return (
    <section className={style.container}>
      <h2 className="title2">Tecnologias</h2>
      <ul className={style.containerUL}>
        {technologies.map((el, i) => (
          
          <TecnologiesCard key={i} tecnologies={el} />
        ))}
          
      </ul>
    </section>
  );
};
export default Tecnologies;
