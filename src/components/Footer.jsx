import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer items-center p-4 border-t border-white/20 text-neutral-content">
  <aside className="items-center grid-flow-col">
    <span className="font-bold text-lg">JonyCmT</span> 
    <p>Copyright © 2023 - All right reserved</p>
  </aside> 
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
  <a href="https://www.youtube.com/jonycmt">
                  <FaYoutube></FaYoutube>
                </a>
                <a href="https://github.com/jonycmtt">
                  <FaGithub></FaGithub>
                </a>
                <a href="https://facebook.com/jonycmt">
                  <FaFacebook></FaFacebook>
                </a>
                <a href="https://www.linkedin.com/in/salman-rahaman/">
                  <FaLinkedin></FaLinkedin>
                </a>
  </nav>
</footer>
    );
};

export default Footer;