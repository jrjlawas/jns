import PageMeta from "@/components/PageMeta.jsx";
import TopBanner from "../../js-components/topbanner";
import Header from "../../js-components/header";
import Hero from "../../js-components/heroHome";
import CtaArea from "@/components/layouts/CtaArea";
import Footer from "../../js-components/footer";
import BackToTop from "@/components/BackToTop.jsx";
import favLogo5 from "@/assets/img/logo/fav-logo5.png";
const Home = () => {
  return (
    <>
      <PageMeta title="JS Global Marketing Services" icon={favLogo5} />
      <TopBanner />
      <Header />
      <Hero />
      <CtaArea />
      <Footer />
      <BackToTop />
    </>
  );
};
export default Home;
