import footerLogo from "@/assets/img/js/logo/footerLogo.svg";

import footerIc1 from "@/assets/img/icons/vl-footer-ic-1.1.svg";
import footerIc2 from "@/assets/img/icons/vl-footer-ic-1.2.svg";
import footerIc3 from "@/assets/img/icons/vl-footer-2.1.svg";

import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";
import { Col, Container, Row } from "react-bootstrap";
const Footer = () => {
  return (
    <footer className="vl-footer-bg-1">
      <Container>
        <Row>
          <Col lg={3} md={6}>
            <div className="vl-footer-widget-1 mb-30">
              <div className="vl-footer-logo">
                <Link to="/">
                  <img src={footerLogo} alt="footerLogo" />
                </Link>
              </div>
              <div className="vl-footer-content">
                <p>
                  JS Global Marketing Services is dedicated to helping students
                  discover opportunities, connect with the right programs, and
                  take the next step toward a brighter future.
                </p>
              </div>
              {/* <div className="vl-footer-social-1">
                <ul>
                  <li>
                    <a
                      className="d-flex align-items-center justify-content-center"
                      href="#"
                    >
                      <FaFacebookF className="fa-brands fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="d-flex align-items-center justify-content-center"
                      href="#"
                    >
                      <FaInstagram className="fa-brands fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="d-flex align-items-center justify-content-center"
                      href="#"
                    >
                      <FaTwitter className="fa-brands fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="d-flex align-items-center justify-content-center"
                      href="#"
                    >
                      <FaGithub className="fa-brands fa-github" />
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="vl-footer-widget-2 pl-90 mb-30">
              <h3 className="title">Quick Links</h3>
              <div className="vl-footer-menu">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/">Our Programs</Link>
                  </li>
                  <li>
                    <Link to="/">About Us</Link>
                  </li>
                  <li>
                    <Link to="/">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/">Enroll Now</Link>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="vl-footer-widget-2 pl-30 mb-30">
              <h3 className="title">Our Programs</h3>
              <div className="vl-footer-menu">
                <ul>
                  <li>
                    <a href="/">Accounting & Payroll Admin</a>
                  </li>
                  <li>
                    <a href="/">Business Administration</a>
                  </li>
                  <li>
                    <Link to="/">Digital & Social Media Marketing</Link>
                  </li>
                  <li>
                    <a href="/">Medical Office Assistant</a>
                  </li>
                  <li>
                    <a href="/">Massage Therapy</a>
                  </li>
                  <li>
                    <a href="/">Pharmacy Assistant</a>
                  </li>
                  <li>
                    <a href="/">Physiotherapist Assistant</a>
                  </li>
                  <li>
                    <a href="/">Healthcare Aide Curriculum</a>
                  </li>
                  <li>
                    <a href="/">Esthetics Diploma</a>
                  </li>
                  <li>
                    <a href="/">Development Service Worker</a>
                  </li>
                  <li>
                    <a href="/">Education Assistant</a>
                  </li>
                  <li>
                    <a href="/">Supply Chain Management</a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="vl-footer-widget-3 mb-30">
              <h3 className="title">Contact Us</h3>
              <div className="vl-footer-icon-list">
                <div className="vl-footer-icon">
                  <span>
                    <img src={footerIc1} alt="footerIc1" />
                  </span>
                </div>
                <div className="vl-footer-text">
                  <a href="mailto:support@charity.com">support@charity.com</a>
                </div>
              </div>
              <div className="vl-footer-icon-list">
                <div className="vl-footer-icon">
                  <span>
                    <img src={footerIc2} alt="footerIc2" />
                  </span>
                </div>
                <div className="vl-footer-text">
                  <a href="#">
                    8708 Technology Forest <br /> Pl Suite 125 -G, The
                    Woodlands, TX 773
                  </a>
                </div>
              </div>
              <div className="vl-footer-icon-list">
                <div className="vl-footer-icon">
                  <span>
                    <img src={footerIc3} alt="footerIc3" />
                  </span>
                </div>
                <div className="vl-footer-text">
                  <a href="tel:1234567890">123-456-7890</a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div className="vl-copyright copyright-border-1">
          <Row>
            <Col lg={6}>
              <p className="vl-copyright-text">
                © 2025 <span style={{ color: "#F47C00" }}>Glotti</span>{" "}
                <span style={{ color: "#0066CC" }}>Business Solutions</span>.
                All Rights Reserved.
                {/* © 2025 Glotti Business Solutions. All Rights Reserved. */}
              </p>
            </Col>
            <Col md={6}>
              <div className="vl-copyright-menu">
                <ul>
                  <li>
                    <a href="#">Privacy Policy </a>
                  </li>
                  <li>
                    <a href="#">Terms &amp; Conditions</a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
