import LinkedinIcon from "../img/linkedinBlackIcon.png";
import InstagramIcon from "../img/instagramBlackIcon.png";
import GithubIcon from "../img/githubBlackIcon.png";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <h2 className="phrase">Vivendo, aprendendo e melhorando a cada dia...</h2>
      <h3 className="authorship">
        Desenvolvido por mim,{" "}
        <a
          className="profileLink"
          target="blank"
          href="https://www.linkedin.com/in/isac-mamede/"
        >
          @dev.mamede
        </a>{" "}
        <img className="copyrightIcon" src="./public/copyright.png" alt="" />
      </h3>

      <div className="footerSocialMedia">
        <a href="https://www.instagram.com/dev.mamede/">
          <img
            className="socialMediaIcon"
            src={InstagramIcon}
            alt="Instagram Icon"
          />
        </a>
        <a href="https://www.linkedin.com/in/isac-mamede/">
          <img
            className="socialMediaIcon"
            src={LinkedinIcon}
            alt="LinkedIn Icon"
          />
        </a>
        <a href="https://github.com/devmamede/">
          <img className="socialMediaIcon" src={GithubIcon} alt="GitHub Icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
