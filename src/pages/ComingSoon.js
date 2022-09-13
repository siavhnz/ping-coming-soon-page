import Layout from "../components/UI/Layout";
import Ping from "../components/Ping";
import SubscribeForm from "../components/SubscribeForm";
import DashboardImg from "../images/illustration-dashboard.png";
import styleUtils from "./ComingSoon.module.css";

const ComingSoon = () => {
  return (
    <Layout>
      <main className={styleUtils.main}>
        <Ping />
        <SubscribeForm />
        <figure className={styleUtils.figure}>
          <img src={DashboardImg} alt="ping" />
        </figure>
      </main>
    </Layout>
  );
};

export default ComingSoon;
