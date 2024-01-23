import "./Skills.css";

const Skills = () => {
  return (
    <>
      <div className="greenArea"></div>
      <main>
        <div className="skillsBox">
          <section className="head">
            <img className="icon" src="../public/terminalIcon.png" alt="" />
            <h2 className="title">Habilidades</h2>
          </section>

          <section className="skillsContainerLine1">
            <section className="html">
              <h3>HTML5</h3>
              <img
                className="icon"
                src="../public/htmlIcon.png"
                alt="HTML5 icon"
              />
            </section>

            <section className="css">
              <h3>CSS3</h3>
              <img
                className="icon"
                src="../public/cssIcon.png"
                alt="CSS3 icon"
              />
            </section>

            <section className="javascript">
              <h3>JavaScript</h3>
              <img
                className="icon"
                src="../public/javascriptIcon.png"
                alt="JavaScript icon"
              />
            </section>

            <section className="react">
              <h3>React</h3>
              <img
                className="icon"
                src="../public/reactIcon.png"
                alt="React icon"
              />
            </section>

            <section className="reactNative">
              <h3>React Native</h3>
              <img
                className="icon"
                src="../public/reactNativeIcon.png"
                alt="React Native icon"
              />
            </section>
          </section>

          <section className="skillsContainerLine2">
            <section className="node">
              <h3>Node.js</h3>
              <img
                className="icon"
                src="../public/nodeIcon.png"
                alt="Node icon"
              />
            </section>

            <section className="Bootstrap">
              <h3>Bootstrap</h3>
              <img
                className="icon"
                src="../public/bootstrapIcon.png"
                alt="Bootstrap icon"
              />
            </section>

            <section className="git">
              <h3>Git e GitHub</h3>
              <img
                className="icon"
                src="../public/gitIcon.png"
                alt="Git icon"
              />
            </section>

            <section className="apis">
              <h3>APIs</h3>
              <img
                className="icon"
                src="../public/apiIcon.png"
                alt="APIs icon"
              />
            </section>

            <section className="mongodb">
              <h3>MongoDB</h3>
              <img
                className="icon"
                src="../public/mongoIcon.png"
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
