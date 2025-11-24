import { programsData } from "./data";
import { Link } from "react-router";
import { FaAngleLeft, FaAngleRight, FaArrowRight } from "react-icons/fa6";
import { Col, Container, Row } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const FilteredPrograms = () => {
  const { id } = useParams();
  const ViewPrograms = (id) => {};
  const programslists = programsData.filter(
    (programsData) => programsData.catid == id
  );
  return (
    <section className="vl-blog-inner sp2">
      <Container>
        <Row>
          <div className="vl-event-content-area">
            <div className="event-content-area">
              <h2 className="title">Our Program Offerings</h2>
              {/* <p className="para">
                At Metsbab Services, we provide quality education designed to
                take you from enrollment to employment. With your future as our
                priority, our programs empower individuals to succeed
                academically and professionally.
              </p> */}
            </div>
            <br></br>
          </div>

          {programslists?.map((item, idx) => (
            <Col lg={4} md={6} key={idx}>
              <div className="vl-single-blg-item mb-30">
                <div className="vl-blg-thumb">
                  <button to="#" onClick={() => ViewPrograms(item.catid)}>
                    <img className="w-100" src={item.image} alt="img" />
                  </button>
                </div>
                <div className="vl-blg-content">
                  <h3 className="title">
                    <Link to="#">{item.title}</Link>
                  </h3>
                  <p>{item.description}</p>
                  {/* <button
                    to="#"
                    onClick={() => ViewPrograms(item.catid)}
                    className="read-more"
                  >
                    View Programs{" "}
                    <span>
                      <FaArrowRight />
                    </span>
                  </button> */}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
export default FilteredPrograms;
