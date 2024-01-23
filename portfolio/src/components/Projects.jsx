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
          <img
            className="projectBanner"
            src="../public/churrascometroBanner.png"
            alt=""
          />
          <img
            className="projectBanner"
            src="../public/churrascometroBanner.png"
            alt=""
          />
          <img
            className="projectBanner"
            src="../public/churrascometroBanner.png"
            alt=""
          />
          <img
            className="projectBanner"
            src="../public/churrascometroBanner.png"
            alt=""
          />
        </section>
      </div>
    </main>
  );
};

export default Projects;
