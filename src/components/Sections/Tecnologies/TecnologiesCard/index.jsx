import style from "../../Tecnologies/style.module.css";

const TecnologiesCard = ({ tecnologies }) => {
  const { img, name } = tecnologies;

  return (
    <li className={style.li}>
      <img src={img} alt="#" />
      <p className="title3">{name}</p>
    </li>
  );
};

export default TecnologiesCard;
