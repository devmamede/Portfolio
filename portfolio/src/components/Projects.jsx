import LeftArrow from "../img/projectsBanners/leftArrow.png";
import FullHomePage from "../img/projectsBanners/fullHomePage.png";
import CarrinhoDeCompras from "../img/projectsBanners/carrinhoDeCompras.png";
import Churrascometro from "../img/projectsBanners/churrascometro.png";
import Countdown from "../img/projectsBanners/countdown.png";
import JogoDaVelha from "../img/projectsBanners/jogoDaVelha.png";
import MusicPlayer from "../img/projectsBanners/musicPlayer.png";
import Quiz from "../img/projectsBanners/quiz.png";
import RightArrow from "../img/projectsBanners/rightArrow.png";
import SocialLinking from "../img/projectsBanners/socialLinking.png";
import Starbucks from "../img/projectsBanners/starbucks.png";

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
            <img className="arrowIcon prev" src={LeftArrow} alt="" />

            <section className="carousel">
              <div className="slide">
                <a
                  href="https://devmamede.github.io/Full-Home-Page/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="projectBanner" src={FullHomePage} alt="" />
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
                    src={CarrinhoDeCompras}
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
                  <img className="projectBanner" src={Countdown} alt="" />
                </a>
              </div>

              <div className="slide">
                <a
                  href="https://devmamede.github.io/Churrascometro/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="projectBanner" src={Churrascometro} alt="" />
                </a>
              </div>

              <div className="slide">
                <a
                  href="https://devmamede.github.io/Jogo-da-Velha/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="projectBanner" src={JogoDaVelha} alt="" />
                </a>
              </div>

              <div className="slide">
                <a
                  href="https://devmamede.github.io/Music-Player/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="projectBanner" src={MusicPlayer} alt="" />
                </a>
              </div>

              <div className="slide">
                <a
                  href="https://devmamede.github.io/Starbucks-Landing-Page/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="projectBanner" src={Starbucks} alt="" />
                </a>
              </div>

              <div className="slide">
                <a
                  href="https://devmamede.github.io/Quizz/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="projectBanner" src={Quiz} alt="" />
                </a>
              </div>

              <div className="slide">
                <a
                  href="https://devmamede.github.io/Social-Linking/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="projectBanner" src={SocialLinking} alt="" />
                </a>
              </div>
            </section>

            <img className="arrowIcon next" src={RightArrow} alt="" />
          </section>

          <button className="curriculoBtn">
            <a target="blank" href="./portfolio/public/pdf/curriculo.pdf">
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
