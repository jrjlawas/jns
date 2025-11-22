import aboutImg1 from "@/assets/img/js/about/aboutImg1.svg";
import aboutImg2 from "@/assets/img/js/about/aboutImg2.svg";
import { Col, Container, Row } from "react-bootstrap";
const About = () => {
  return (
    <section id="about" className="vl-about4 sp2">
      <Container>
        <Row className=" flex-lg-row flex-column-reverse">
          <Col lg={6}>
            <div className="vl-about-thumb mb-30">
              <Row className="">
                <Col lg={6} md={6}>
                  <div className="thumb-1 mb-30 reveal">
                    <img
                      className="w-100 img-fluid"
                      src={aboutImg1}
                      alt="aboutImg1"
                    />
                  </div>
                </Col>
                <Col lg={6} md={6}>
                  <div className="thumb-2">
                    <img
                      className="thmb2 reveal w-100"
                      src={aboutImg2}
                      alt="aboutImg2"
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={6}>
            <div className="vl-about-content mb-30 ml-50">
              <div className="vl-section-title4">
                <h5
                  className="subtitle"
                  data-aos="fade-left"
                  data-aos-duration={800}
                  data-aos-delay={300}
                >
                  About JS Marketing Services Ltd.
                </h5>
                <h2 className="title text-anime-style-3">
                  The Journey of Sheila Tangcay
                </h2>
                <p
                  className="para pb-32"
                  data-aos="fade-left"
                  data-aos-duration={800}
                  data-aos-delay={300}
                  style={{
                    lineHeight: "1.8",
                    textAlign: "justify",
                  }}
                >
                  JS Global Marketing Services began with Sheila Tangcay, who
                  started the company with a clear purpose—to guide students
                  through their educational choices with honesty and genuine
                  support. Without a formal marketing background or a large
                  team, Sheila focused on sharing real experiences and practical
                  insights. Her authentic approach quickly resonated with
                  students, building trust and growing the brand one step at a
                  time.
                  <br />
                  <br />
                  Today, JS Global Marketing Services continues to follow the
                  same foundation Sheila started with: clear guidance, honest
                  communication, and a commitment to helping students make
                  confident decisions about their future.
                </p>
              </div>
              {/* <Row className="">
                <Col
                  lg={12}
                  md={6}
                  data-aos="fade-left"
                  data-aos-duration={900}
                  data-aos-delay={300}
                >
                  <div className="vl-about-icon-box mb-30">
                    <div className="vl-about-icon">
                      <span>
                        <img src={about1} alt="about1" />
                      </span>
                    </div>
                    <div className="vl-icon-content">
                      <h3 className="title">
                        <Link to="/pages/service">
                          Helping people rebuild and prepare
                        </Link>
                      </h3>
                      <p>
                        We help them rebuild stronger more resilient for the
                        future. Together with supporters like.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col
                  lg={12}
                  md={6}
                  data-aos="fade-left"
                  data-aos-duration={1000}
                  data-aos-delay={300}
                >
                  <div className="vl-about-icon-box mb-30">
                    <div className="vl-about-icon">
                      <span>
                        <img src={about2} alt="about2" />
                      </span>
                    </div>
                    <div className="vl-icon-content">
                      <h3 className="title">
                        <Link to="/pages/service">
                          Putting people first in everything we do
                        </Link>
                      </h3>
                      <p>
                        Guided by compassion driven the belief that every act
                        kindness makes a difference.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default About;
