import { ReactComponent as Logo } from "../images/logo.svg";
import styleUtils from "./Ping.module.css";

const Ping = () => {
  return (
    <div className={styleUtils.container}>
      <Logo alt="logo" title="logo" focusable="false" />
      <h1 className={styleUtils.title}>
        We are launching <span className="color-darkblue font-bold">soon!</span>
      </h1>
      <p className={`${styleUtils.desc} color-darkblue`}>
        Subscribe and get notified
      </p>
    </div>
  );
};

export default Ping;
