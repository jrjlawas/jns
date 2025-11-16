import { useRef } from "react";
import hero1 from "@/assets/img/shape/vl-hero-shape-1.1.png";
import hero2 from "@/assets/img/shape/vl-hero-shape-1.2.png";
import titleIcon from "@/assets/img/icons/vl-sub-title-icon.svg";

import video from "@/assets/img/js/home/bgHome.webm";
import {
  FaAngleLeft,
  FaAngleRight,
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
const Hero = () => {
  const settings = {
    draggable: false,
    autoplay: false,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    fade: true,
    cssEase: "ease-in-out",
    touchThreshold: 100,
    arrows: false,
    dots: false,
  };
  const sliderRef = useRef(null);
  return (
    <div className="vl-banner p-relative fix">
      <Slider ref={sliderRef} {...settings} className="slider-active-1">
        <div className="vl-hero-slider vl-hero-bg slick-slide slick-current slick-active">
          <video autoPlay muted loop className="vl-hero-video">
            <source src={video} type="video/webm" />
            Your browser does not support the video tag.
          </video>
          <Container>
            <Row>
              <Col lg={9}>
                <div className="vl-hero-section-title">
                  <h5 className="vl-subtitle">
                    Your Future in Canada Starts Here.
                  </h5>
                  <h1 className="vl-title text-anime-style-3">
                    Your Canadian Education Begins With a Story—And It Starts
                    Today.
                  </h1>
                  <p>
                    JS Global Marketing Services helps students like you connect
                    with prominent schools across Canada through honest
                    guidance, real experiences, and a team that understands the
                    courage it takes to build a new future abroad.
                  </p>
                  <div className="vl-hero-btn">
                    <a href="/" className="header-btn1">
                      Start Your Application{" "}
                      <span>
                        <FaArrowRight />
                      </span>
                    </a>
                  </div>
                </div>
              </Col>
              <Col lg={5} />
            </Row>
          </Container>
        </div>
      </Slider>
    </div>
  );
};
export default Hero;
