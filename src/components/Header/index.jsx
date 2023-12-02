import logo from "../../assets/portfolio.png";
import style from "./style.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <img src={logo} alt="#" />
      <div className={style.div}>
        <p>Sobre</p>
        <p>Stack</p>
        <p>Projetos</p>
      </div>
      <button className="btn">Contato</button>
    </header>
  );
};

export default Header;
