import { Col, Container, Row } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa6";
const Contact = () => {
  return (
    <section className="vl-contact-section-inner sp2">
      <Container>
        <Row className=" flex-lg-row flex-column-reverse">
          <Col lg={6} className="mb-30">
            <div className="vl-maps">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22678.606333336273!2d-113.98412443871041!3d51.06465692160698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53717b37c9327641%3A0x3117767c9d52b3a3!2s5204%20Marshall%20Rd%20NE%2C%20Calgary%2C%20AB%20T2A%202Y9%2C%20Canada!5e0!3m2!1sen!2sph!4v1763774369279!5m2!1sen!2sph"
                allowFullScreen
                className="vl-contact-maps"
              />
            </div>
          </Col>
          <Col lg={6} className="mb-30">
            <div className="vl-section-content ml-50">
              <div className="section-title">
                <h4 className="subtitle">Get in Touch With Us</h4>
                <h2 className="title">
                  Your Questions Matter — And We’re Here to Help
                </h2>
                <p className="para pb-32">
                  Whether you're exploring your study options, looking for
                  guidance, or ready to start your journey, our team is here to
                  support you every step of the way. Reach out to us anytime,
                  and we’ll make sure you get the answers, clarity, and
                  assistance you need to move forward confidently.
                </p>
              </div>
              <div className="vl-form-inner">
                <form action="#">
                  <Row>
                    <Col lg={6}>
                      <input type="text" placeholder="First Name*" />
                    </Col>
                    <Col lg={6}>
                      <input type="text" placeholder="Last Name*" />
                    </Col>
                    <Col lg={6}>
                      <input type="email" placeholder="Email Address*" />
                    </Col>
                    <Col lg={6}>
                      <input type="text" placeholder="Contact No.*" />
                    </Col>
                    <Col lg={12}>
                      <textarea
                        name="message"
                        id="message"
                        placeholder="How can we help you?*"
                        defaultValue={""}
                      />
                    </Col>
                    <Col lg={12}>
                      <div className="btn-area">
                        <button className="header-btn1">
                          Send Now{" "}
                          <span>
                            <FaArrowRight />
                          </span>
                        </button>
                      </div>
                    </Col>
                  </Row>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Contact;
