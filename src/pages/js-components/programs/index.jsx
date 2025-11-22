import { programData } from "./data";
import calenderImg from "@/assets/img/icons/vl-calender-1.1.svg";
import userImg from "@/assets/img/icons/vl-user-1.1.svg";
import { Link } from "react-router";
import { FaAngleLeft, FaAngleRight, FaArrowRight } from "react-icons/fa6";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Programs = () => {
  const navigate = useNavigate();

  const ViewPrograms = (id) => {
    navigate(`/programs/${id}`);
  };
  return (
    <section className="vl-blog-inner sp2">
      <Container>
        <Row>
          <div className="vl-event-content-area">
            <div className="event-content-area">
              <h2 className="title">Explore Our Programs</h2>
              <p className="para">
                At JS Global Marketing Services Ltd, we provide quality
                education designed to take you from enrollment to employment.
                With your future as our priority, our programs empower
                individuals to succeed academically and professionally.
              </p>
            </div>
            <br></br>
          </div>

          {programData?.map((item, idx) => (
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
                  <p>{item.excerpt}</p>
                  <button
                    to="#"
                    onClick={() => ViewPrograms(item.catid)}
                    className="read-more"
                  >
                    View Programs{" "}
                    <span>
                      <FaArrowRight />
                    </span>
                  </button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
export default Programs;
