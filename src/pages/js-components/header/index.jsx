import logo1Img from "@/assets/img/js/logo/logo.svg";
import useScrollEvent from "@/hooks/useScrollEvent";
import { Link } from "react-router";

import SingleMobileMenu from "../../js-components/singleMobileMenu";

import { FaArrowRight, FaAngleDown } from "react-icons/fa6";
import { Col, Container, Row } from "react-bootstrap";
const Header = () => {
  const { scrollY } = useScrollEvent();
  return (
    <>
      <header>
        <div
          className={`header-area homepage1 header header-sticky d-none d-lg-block mt-16 ${
            scrollY > 100 && "sticky"
          }`}
          id="header"
        >
          <Container>
            <Row>
              <Col lg={12}>
                <div className="header-elements header-elements-1">
                  <div className="site-logo">
                    <Link to="/">
                      <img src={logo1Img} alt="logo1Img" />
                    </Link>
                  </div>
                  <div className="main-menu">
                    <ul>
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="#">
                          Our Programs{" "}
                          <FaAngleDown className="fa-solid fa-angle-down align-bottom" />
                        </a>
                        <ul className="dropdown-padding">
                          <li>
                            <Link to="/programs/1">
                              Business Administration
                            </Link>
                          </li>
                          <li>
                            <Link to="/programs/2">
                              Technology & Digital Skills
                            </Link>
                          </li>
                          <li>
                            <Link to="/programs/3">Health & Wellness</Link>
                          </li>
                          <li>
                            <Link to="/programs/4">Beauty & Aesthetics</Link>
                          </li>
                          <li>
                            <Link to="/programs/5">
                              Human Services & Community Support
                            </Link>
                          </li>
                          <li>
                            <Link to="/programs/6">
                              Office & Medical Support
                            </Link>
                          </li>
                          <li>
                            <Link to="/programs/7">Design & Technical</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/about">About Us</a>
                      </li>
                      <li>
                        <a href="/contact">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                  <div className="btn-area">
                    <Link to="/contact" className="header-btn1">
                      Enroll Now{" "}
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </header>
      <SingleMobileMenu />
    </>
  );
};
export default Header;
