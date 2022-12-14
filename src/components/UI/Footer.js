import { ReactComponent as Facebook } from "../../images/facebook.svg";
import { ReactComponent as Twitter } from "../../images/twitter.svg";
import { ReactComponent as Instagram } from "../../images/instagram.svg";
import styleUtils from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styleUtils.footer}>
      <div className={styleUtils.footer__icons}>
        <a
          aria-label="go to our facebook"
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook />
        </a>
        <a
          aria-label="go to our twitter"
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter />
        </a>
        <a
          aria-label="go to our instagram"
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram />
        </a>
      </div>
      <p className={styleUtils.copyright}>
        &copy; Copyright Ping. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
