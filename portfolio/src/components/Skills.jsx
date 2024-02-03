import "./Skills.css";

const Skills = () => {
  return (
    <>
      <div className="greenArea"></div>
      <main className="content">
        <div className="skillsBox">
          <section className="head">
            <img
              className="icon"
              src="../portfolio/public/terminalIcon.png"
              alt=""
            />
            <h2 className="title">Habilidades</h2>
          </section>

          <section className="skillsContainer">
            <section className="html">
              <h3>HTML5</h3>
              <img
                className="icon"
                src="./portfolio/public/htmlIcon.png"
                alt="HTML5 icon"
              />
            </section>

            <section className="css">
              <h3>CSS3</h3>
              <img
                className="icon"
                src="../portfolio/public/cssIcon.png"
                alt="CSS3 icon"
              />
            </section>

            <section className="javascript">
              <h3>JavaScript</h3>
              <img
                className="icon"
                src="./portfolio/public/javascriptIcon.png"
                alt="JavaScript icon"
              />
            </section>

            <section className="react">
              <h3>React</h3>
              <img
                className="icon"
                src="./portfolio/public/reactIcon.png"
                alt="React icon"
              />
            </section>

            <section className="reactNative">
              <h3>React Native</h3>
              <img
                className="icon"
                src="./portfolio/public/reactNativeIcon.png"
                alt="React Native icon"
              />
            </section>

            <section className="node">
              <h3>Node.js</h3>
              <img
                className="icon"
                src="./portfolio/public/nodeIcon.png"
                alt="Node icon"
              />
            </section>

            <section className="Bootstrap">
              <h3>Bootstrap</h3>
              <img
                className="icon"
                src="./portfolio/public/bootstrapIcon.png"
                alt="Bootstrap icon"
              />
            </section>

            <section className="git">
              <h3>Git e GitHub</h3>
              <img
                className="icon"
                src="./portfolio/public/gitIcon.png"
                alt="Git icon"
              />
            </section>

            <section className="apis">
              <h3>APIs</h3>
              <img
                className="icon"
                src="./portfolio/public/apiIcon.png"
                alt="APIs icon"
              />
            </section>

            <section className="mongodb">
              <h3>MongoDB</h3>
              <img
                className="icon"
                src="./portfolio/public/mongoIcon.png"
                alt="MongoDB icon"
              />
            </section>
          </section>
        </div>
      </main>
    </>
  );
};

export default Skills;
