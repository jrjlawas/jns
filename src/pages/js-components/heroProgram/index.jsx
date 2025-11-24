import contactBg from "@/assets/img/js/contact/contactHomeBG.svg";
import { FaAngleRight } from "react-icons/fa6";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";
import { programData } from "../../../pages/js-components/programs/data";
import { useParams, useNavigate } from "react-router-dom";

const Hero = () => {
  const { id } = useParams();
  const Category = programData.filter((programData) => programData.catid == id);
  return (
    <section
      className="vl-breadcrumb"
      style={{
        backgroundImage: `url(${contactBg})`,
      }}
    >
      <Container>
        <Row>
          <Col lg={12}>
            <div className="vl-breadcrumb-title">
              <h2 className="heading">{Category[0].title}</h2>
              <div className="vl-breadcrumb-list">
                <span>
                  <Link to="/">Home</Link>
                </span>
                <span className="dvir">
                  <FaAngleRight className="fa-solid fa-angle-right" />
                </span>
                <span>
                  <a className="active" href="#">
                    Programs Lists
                  </a>
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Hero;
