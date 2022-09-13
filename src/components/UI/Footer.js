import { ReactComponent as Facebook } from "../../images/facebook.svg";
import { ReactComponent as Twitter } from "../../images/twitter.svg";
import { ReactComponent as Instagram } from "../../images/instagram.svg";
import styleUtils from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styleUtils.footer}>
      <div className={styleUtils.footer__icons}>
        <a href="https://facebook.com">
          <Facebook />
        </a>
        <a href="https://twitter.com">
          <Twitter />
        </a>
        <a href="https://instagram.com">
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
