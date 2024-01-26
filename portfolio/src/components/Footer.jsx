import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <h2 className="phrase">Vivendo, aprendendo e melhorando a cada dia...</h2>
      <h3 className="authorship">
        Desenvolvido por mim,{" "}
        <a
          className="profileLink"
          href="https://www.linkedin.com/in/isac-mamede/"
        >
          @dev.mamede
        </a>{" "}
        <img className="copyrightIcon" src="./public/copyright.png" alt="" />
      </h3>
    </footer>
  );
};

export default Footer;
