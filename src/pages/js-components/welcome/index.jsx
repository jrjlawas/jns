import about1 from "@/assets/img/js/home/about1.svg";
import { Col, Container, Row } from "react-bootstrap";
const Welcome = () => {
  return (
    <section id="about" className="vl-about-section sp2">
      <Container>
        <Row>
          <Col lg={8}>
            <div className="vl-about-content">
              <div className="vl-section-title-1">
                <h5
                  className="subtitle"
                  data-aos="fade-right"
                  data-aos-duration={800}
                  data-aos-delay={300}
                >
                  Welcome to JS Global Marketing Services
                </h5>
                <h2 className="title text-anime-style-3">
                  Where Student Journeys Begin With Real Stories and Real
                  Guidance
                </h2>
                <p
                  className="pb-32"
                  data-aos="fade-right"
                  data-aos-duration={800}
                  data-aos-delay={300}
                  style={{
                    lineHeight: "1.8",
                    textAlign: "justify",
                  }}
                >
                  At JS Global Marketing Services, we believe that every student
                  deserves clarity, confidence, and direction. Your future
                  doesn’t start with complicated processes—it starts with
                  understanding who you are and where you want to go. We’re here
                  to guide you through opportunities, connect you with the right
                  programs, and support you as you take the first steps toward
                  achieving your goals. Your story matters, and we’re here to
                  help you shape it.
                  <br />
                  <br /> Whether you're exploring your options, preparing for
                  international studies, or simply seeking guidance on the right
                  path, we make the journey easier and more meaningful. Our
                  mission is to ensure that every student feels supported,
                  informed, and empowered to make decisions that will shape
                  their future with confidence.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} className="mb-30">
            <div className="vl-about-large-thumb reveal">
              <img className="w-100" src={about1} alt="about1" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Welcome;
