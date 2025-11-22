import ctaImg1 from "@/assets/img/js/others/ctaBG.svg";
import { Col, Container, Row } from "react-bootstrap";
const CtaArea = () => {
  return (
    <section id="contact" className="vl-cta">
      <Container>
        <div
          className="vl-cta-bg"
          style={{
            backgroundImage: `url(${ctaImg1})`,
          }}
        >
          <Row>
            <Col lg={12}>
              <div className="vl-cta-content text-center">
                <h2 className="title">Ready to Start Your Journey?</h2>
                <p>
                  Take the first step toward a brighter future. Connect with us
                  today and discover <br />
                  opportunities, support, and guidance designed to help you move
                  forward with confidence.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};
export default CtaArea;
