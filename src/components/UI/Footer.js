import { ReactComponent as Facebook } from "../../images/facebook.svg";
import { ReactComponent as Twitter } from "../../images/twitter.svg";
import { ReactComponent as Instagram } from "../../images/instagram.svg";
const Footer = () => {
  return (
    <footer>
      <div>
        <a>
          <Facebook />
        </a>
        <a>
          <Twitter />
        </a>
        <a>
          <Instagram />
        </a>
      </div>
      <p>&copy; Copyright Ping. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
