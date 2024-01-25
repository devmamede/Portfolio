import "./Projects.css";

const Projects = () => {
  return (
    <main>
      <div className="contentProjects">
        <section className="head">
          <h2 className="titleProjects">Projetos</h2>
          <h3 className="subtitleProjects">
            Explore os meus trabalhos mais recentes abaixo...
          </h3>
        </section>

        <section className="carousel">
          <a
            href="https://devmamede.github.io/Lista-de-Compras/"
            target="blank"
          >
            <img
              className="projectBanner"
              src="../public/projectsBanners/carrinhoDeCompras.png"
              alt=""
            />
          </a>

          <a href="https://devmamede.github.io/Churrascometro/" target="blank">
            <img
              className="projectBanner"
              src="../public/projectsBanners/churrascometro.png"
              alt=""
            />
          </a>

          <a href="https://devmamede.github.io/Countdown/" target="blank">
            <img
              className="projectBanner"
              src="../public/projectsBanners/countdown.png"
              alt=""
            />
          </a>

          <a href="https://devmamede.github.io/Full-Home-Page/" target="blank">
            <img
              className="projectBanner"
              src="../public/projectsBanners/fullHomePage.png"
              alt=""
            />
          </a>

          <a href="https://devmamede.github.io/Jogo-da-Velha/" target="blank">
            <img
              className="projectBanner"
              src="../public/projectsBanners/jogoDaVelha.png"
              alt=""
            />
          </a>

          <a href="https://devmamede.github.io/Music-Player/" target="blank">
            <img
              className="projectBanner"
              src="../public/projectsBanners/musicPlayer.png"
              alt=""
            />
          </a>

          <a href="https://devmamede.github.io/Quizz/" target="blank">
            <img
              className="projectBanner"
              src="../public/projectsBanners/quiz.png"
              alt=""
            />
          </a>

          <a href="https://devmamede.github.io/Social-Linking/" target="blank">
            <img
              className="projectBanner"
              src="../public/projectsBanners/socialLinking.png"
              alt=""
            />
          </a>

          <a
            href="https://devmamede.github.io/Starbucks-Landing-Page/"
            target="blank"
          >
            <img
              className="projectBanner"
              src="../public/projectsBanners/starbucks.png"
              alt="Starbucks Langing Page"
            />
          </a>
        </section>
      </div>
    </main>
  );
};

document.querySelector(".carousel").addEventListener("wheel", function (event) {
  event.preventDefault();
  this.scrollLeft += event.deltaX;
});

export default Projects;
