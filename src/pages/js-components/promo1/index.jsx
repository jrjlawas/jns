import thumb1 from "@/assets/img/js/home/about3.svg";
import thumb2 from "@/assets/img/js/home/about4.svg";
import thumb3 from "@/assets/img/js/home/about2.svg";

import { FaCheck } from "react-icons/fa6";
import { Col, Container, Row } from "react-bootstrap";
const Promo1 = () => {
  return (
    <section id="about" className="vl-about5 sp2">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="vl-about-content">
              <div className="vl-section-title5 mb-40">
                {/* <h5
                  className="subtitle"
                  data-aos="fade-right"
                  data-aos-duration={1000}
                  data-aos-delay={300}
                >
                  Why Students Choose Us
                </h5> */}
                <h5
                  className="subtitle"
                  data-aos="fade-right"
                  data-aos-duration={800}
                  data-aos-delay={300}
                >
                  Why Students Choose Us
                </h5>
                <h2 className="title text-anime-style-3">
                  Opportunities Designed to Support Your Success
                </h2>
                <p
                  className="para"
                  data-aos="fade-right"
                  data-aos-duration={1000}
                  data-aos-delay={300}
                >
                  We believe every student should have access to the tools,
                  support, and opportunities they need to build a strong future.
                  That’s why our programs are designed to be flexible,
                  accessible, and student-centered—so you can study in a way
                  that fits your life, your goals, and your success.
                </p>
              </div>
              <div className="vl-sm-thumb mb-30 reveal">
                <img className="w-100" src={thumb1} alt="thumb1" />
              </div>
              <div className="vl-sm-thumb2 mb-30 reveal">
                <img className="w-100" src={thumb2} alt="thumb2" />
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="vl-about-content2 ml-20 reveal">
              <div className="large-thumb mb-30">
                <img className="w-100" src={thumb3} alt="thumb3" />
              </div>
              <div className="content mb-30">
                <p
                  className="para"
                  data-aos="fade-left"
                  data-aos-duration={900}
                  data-aos-delay={300}
                >
                  Our student programs are built to give you real opportunities
                  that make education easier, more affordable, and more
                  accessible. From financial support to flexible learning
                  options, everything we offer is designed to help you move
                  forward with confidence and convenience.
                </p>
                <div
                  className="icon-list-box"
                  data-aos="fade-left"
                  data-aos-duration={1000}
                  data-aos-delay={300}
                >
                  <ul>
                    <li>
                      <span>
                        <FaCheck className="fa-solid fa-check" />
                      </span>
                      $4,000 Cash Scholarship / Modular Support
                    </li>
                    <li>
                      <span>
                        <FaCheck className="fa-solid fa-check" />
                      </span>
                      Flexible Schedules (Morning, Evening, or Weekends)
                    </li>
                    <li>
                      <span>
                        <FaCheck className="fa-solid fa-check" />
                      </span>
                      Free Laptop for Students
                    </li>
                    <li>
                      <span>
                        <FaCheck className="fa-solid fa-check" />
                      </span>
                      Blended Learning Options
                    </li>
                    <li>
                      <span>
                        <FaCheck className="fa-solid fa-check" />
                      </span>
                      High Funding Approval
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Promo1;
