import PageMeta from "@/components/PageMeta.jsx";
import TopBanner from "../../js-components/topbanner";
import Header from "../../js-components/header";
import Hero from "../../js-components/heroContact";
import Contact from "../../js-components/contact";
import CtaArea from "../../js-components/cta";
import Footer from "../../js-components/footer";
import BackToTop from "@/components/BackToTop.jsx";

import favLogo5 from "@/assets/img/js/logo/hLogo.svg";
const ContactJS = () => {
  return (
    <>
      <PageMeta title="JS Global Marketing Services" icon={favLogo5} />
      <TopBanner />
      <Header />
      <Hero />
      <Contact />
      <CtaArea />
      <Footer />
      <BackToTop />
    </>
  );
};
export default ContactJS;
