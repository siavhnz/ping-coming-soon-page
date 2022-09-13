import Layout from "../components/UI/Layout";
import Ping from "../components/Ping";
import SubscribeForm from "../components/SubscribeForm";
import DashboardImg from "../images/illustration-dashboard.png";

const ComingSoon = () => {
  return (
    <Layout>
      <main>
        <Ping />
        <SubscribeForm />
        <figure>
          <img src={DashboardImg} alt="ping" />
        </figure>
      </main>
    </Layout>
  );
};

export default ComingSoon;
