import wppLogo from "../../assets/whatsapp-icon.png";
import lkdLogo from "../../assets/linkedin-icon.png";
import ghLogo from "../../assets/github-icon.png";
import { user } from "../../data/user";
import style from "./style.module.css";

const Footer = () => {
  return (
    <footer className={style.container}>
      <div>
        <h1 className="title2">Contato</h1>
        <img className={style.img} src={wppLogo} alt="#" />
        <img className={style.img} src={lkdLogo} alt="#" />
        <img className={style.img} src={ghLogo} alt="#" />
      </div>

      <p className="paragraph1">Todos os direitos reservados - {user}</p>
    </footer>
  );
};

export default Footer;
