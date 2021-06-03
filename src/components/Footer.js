import { FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer>
        <hr />
        <div>
          <p align="center">
            Copyright &copy; 2020-2021 Fatima Ali. Developed by Fatima Ali
          </p>
        </div>
        <div className="container1">
          <i>
            <FaInstagram className="icons" />
          </i>
          <i>
            <FaGithub className="icons" />
          </i>
          <i>
            <FaTwitter className="icons" />
          </i>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
