import MyPhoto from "../img/myPhoto.jpg";
import LinkedinIcon from "../img/linkedinIcon.png";
import InstagramIcon from "../img/instagramIcon.png";
import GithubIcon from "../img/githubIcon.png";

import Header from "./Header";
import "./Apresentation.css";

const Apresentation = () => {
  return (
    <>
      <Header />
      <div className="apresentationContainer">
        <div className="apresentation">
          <section className="social">
            <img className="myPhoto" src={MyPhoto} alt="Foto do Isac" />
            <div className="socialMedia">
              <a target="blank" href="https://www.linkedin.com/in/isac-mamede/">
                <img
                  className="socialMediaIcon"
                  src={LinkedinIcon}
                  alt="LinkedIn Icon"
                />
              </a>
              <a target="blank" href="https://www.instagram.com/dev.mamede/">
                <img
                  className="socialMediaIcon"
                  src={InstagramIcon}
                  alt="LinkedIn Icon"
                />
              </a>
              <a target="blank" href="https://github.com/devmamede/">
                <img
                  className="socialMediaIcon"
                  src={GithubIcon}
                  alt="LinkedIn Icon"
                />
              </a>
            </div>
          </section>

          <section className="info">
            <p>
              <span className="yellowColor">{"{"}</span>
              <br />
              <span className="greenColor chave">{'"nome"'}</span>
              <span className="yellowColor">:</span>
              <span className="orangeColor">{' "isac"'}</span>
              <br />
              <span className="greenColor chave">{'"profissão"'}</span>
              <span className="yellowColor">:</span>
              <span className="orangeColor">{' "desenvolvedor frontend"'}</span>
              <br />
              <span className="greenColor chave">{'"likes"'}</span>
              <span className="yellowColor">:</span>
              <span className="pinkColor">{" ["}</span>
              <span className="orangeColor">{'"futebol"'}</span>
              <span className="yellowColor">,</span>
              <span className="orangeColor">{' "games"'}</span>
              <span className="pinkColor">{"]"}</span>
              <br />
              <span className="yellowColor">{"}"}</span>
            </p>
          </section>
        </div>

        <article className="aboutMe">
          <div className="text">
            <h2>Que bom ter você aqui. Prazer te conhecer!</h2>
            <p>
              Sou desenvolvedor Front-end com conhecimento em React, JavaScript,
              Bootstrap, Node e consumo de APIs. Apaixonado por tecnologia e
              pelo desenvolvimento de ferramentas e sites que agregam valor,
              busco cada dia mais aprender e consolidar os meus conhecimentos.
              Tenho experiência no desenvolvimento de projetos pessoais,
              freelancers e atualmente estou me formando em Análise e
              Desenvolvimento de Sistemas.
            </p>
          </div>
        </article>
      </div>
    </>
  );
};

export default Apresentation;
