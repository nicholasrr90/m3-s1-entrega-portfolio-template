import {username} from "../../../data/user.js"
import bannerImg from "../../../assets/banner-img.png"
import style from "./style.module.css"

const User = () => {

    return (
      <>
        <section className={style.container}>
        <div className={style.userInfo}>
          <h2 className={style.label}>{username}</h2>
          <h1 className="title1">Bem vindo ao
meu portfólio</h1>
          <p className="paragraph1">Uma frase interessante sobre mim</p>
          <button className="btn">Saiba mais</button>  
          </div>
        <img src={bannerImg} alt="#" />
        </section>
        </>
    )
}

export default User;