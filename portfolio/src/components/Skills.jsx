import TerminalIcon from "../img/terminalIcon.png";
import HtmlIcon from "../img/htmlIcon.png";
import CssIcon from "../img/cssIcon.png";
import JavascriptIcon from "../img/javascriptIcon.png";
import ReactIcon from "../img/reactIcon.png";
import ReactNativeIcon from "../img/reactNativeIcon.png";
import NodeIcon from "../img/nodeIcon.png";
import BootstrapIcon from "../img/bootstrapIcon.png";
import GitIcon from "../img/gitIcon.png";
import ApiIcon from "../img/apiIcon.png";
import MongoIcon from "../img/mongoIcon.png";

import "./Skills.css";

const Skills = () => {
  return (
    <>
      <div className="greenArea"></div>
      <main className="content">
        <div className="skillsBox">
          <section className="head">
            <img className="icon" src={TerminalIcon} alt="" />
            <h2 className="title">Habilidades</h2>
          </section>

          <section className="skillsContainer">
            <section className="html">
              <h3>HTML5</h3>
              <img className="icon" src={HtmlIcon} alt="HTML5 icon" />
            </section>

            <section className="css">
              <h3>CSS3</h3>
              <img className="icon" src={CssIcon} alt="CSS3 icon" />
            </section>

            <section className="javascript">
              <h3>JavaScript</h3>
              <img
                className="icon"
                src={JavascriptIcon}
                alt="JavaScript icon"
              />
            </section>

            <section className="react">
              <h3>React</h3>
              <img className="icon" src={ReactIcon} alt="React icon" />
            </section>

            <section className="reactNative">
              <h3>React Native</h3>
              <img
                className="icon"
                src={ReactNativeIcon}
                alt="React Native icon"
              />
            </section>

            <section className="node">
              <h3>Node.js</h3>
              <img className="icon" src={NodeIcon} alt="Node icon" />
            </section>

            <section className="Bootstrap">
              <h3>Bootstrap</h3>
              <img className="icon" src={BootstrapIcon} alt="Bootstrap icon" />
            </section>

            <section className="git">
              <h3>Git e GitHub</h3>
              <img className="icon" src={GitIcon} alt="Git icon" />
            </section>

            <section className="apis">
              <h3>APIs</h3>
              <img className="icon" src={ApiIcon} alt="APIs icon" />
            </section>

            <section className="mongodb">
              <h3>MongoDB</h3>
              <img className="icon" src={MongoIcon} alt="MongoDB icon" />
            </section>
          </section>
        </div>
      </main>
    </>
  );
};

export default Skills;
