import Footer from "./Footer";
import "./Projects.css";

const Projects = () => {
  return (
    <>
      <main>
        <div className="contentProjects">
          <section className="head">
            <h2 className="titleProjects">Projetos</h2>
            <h3 className="subtitleProjects">
              Explore os meus trabalhos mais recentes abaixo...
            </h3>
          </section>

          <section className="carouselContent">
            <img
              className="arrowIcon prev"
              src="./public/leftArrow.png"
              alt=""
            />

            <section className="carousel">
              <div className="slide">
                <a
                  href="https://devmamede.github.io/Full-Home-Page/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="projectBanner"
                    src="../public/projectsBanners/fullHomePage.png"
                    alt=""
                  />
                </a>
              </div>

              <div className="slide">
                <a
                  href="https://devmamede.github.io/Lista-de-Compras/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="projectBanner"
                    src="../public/projectsBanners/carrinhoDeCompras.png"
                    alt=""
                  />
                </a>
              </div>

              <div className="slide">
                <a
                  href="https://devmamede.github.io/Countdown/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="projectBanner"
                    src="../public/projectsBanners/countdown.png"
                    alt=""
                  />
                </a>
              </div>

              <div className="slide">
                <a
                  href="https://devmamede.github.io/Churrascometro/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="projectBanner"
                    src="../public/projectsBanners/churrascometro.png"
                    alt=""
                  />
                </a>
              </div>

              <div className="slide">
                <a
                  href="https://devmamede.github.io/Jogo-da-Velha/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="projectBanner"
                    src="../public/projectsBanners/jogoDaVelha.png"
                    alt=""
                  />
                </a>
              </div>

              <div className="slide">
                <a
                  href="https://devmamede.github.io/Music-Player/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="projectBanner"
                    src="../public/projectsBanners/musicPlayer.png"
                    alt=""
                  />
                </a>
              </div>

              <div className="slide">
                <a
                  href="https://devmamede.github.io/Starbucks-Landing-Page/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="projectBanner"
                    src="../public/projectsBanners/starbucks.png"
                    alt=""
                  />
                </a>
              </div>

              <div className="slide">
                <a
                  href="https://devmamede.github.io/Quizz/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="projectBanner"
                    src="../public/projectsBanners/quiz.png"
                    alt=""
                  />
                </a>
              </div>

              <div className="slide">
                <a
                  href="https://devmamede.github.io/Social-Linking/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="projectBanner"
                    src="../public/projectsBanners/socialLinking.png"
                    alt=""
                  />
                </a>
              </div>
            </section>

            <img
              className="arrowIcon next"
              src="./public/rightArrow.png"
              alt=""
            />
          </section>

          <button className="curriculoBtn">
            <a target="blank" href="./public/pdf/curriculo.pdf">
              Visualizar currículo
            </a>
          </button>
        </div>
      </main>

      <Footer />
    </>
  );
};

setTimeout(() => {
  document
    .querySelector(".carousel")
    .addEventListener("wheel", function (event) {
      event.preventDefault();
      this.scrollLeft += event.deltaY;
    });

  document.querySelector(".prev").addEventListener("click", function () {
    document.querySelector(".carousel").scrollLeft -= 200;
  });

  document.querySelector(".next").addEventListener("click", function () {
    document.querySelector(".carousel").scrollLeft += 200;
  });
}, 500);

export default Projects;
