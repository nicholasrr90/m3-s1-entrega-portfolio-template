import style from "./style.module.css"

const About = () => {
  return (
    <section className={style.container}>
    <div className={style.containerH1}>
      <h1 className="title2">Sobre mim</h1>
      </div>
      <div className={style.containerP}>
      <p className="paragraph1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ex magna,
        imperdiet sodales sem quis, sollicitudin lobortis purus. Etiam a ipsum
        finibus, dictum leo non, ultrices dui. Nunc id felis pharetra, vehicula
        enim in, suscipit nisi. Mauris eget sapien a velit facilisis ullamcorper
        feugiat nec orci. Duis ac iaculis turpis, at feugiat orci.
      </p>
      </div>
    </section>
  );
};

export default About;
