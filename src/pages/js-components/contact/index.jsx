import { Col, Container, Row } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa6";
import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ visible: false, message: "", type: "" });
  const showAlert = (message, type = "success") => {
    setAlert({ visible: true, message, type });
  };
  const serviceID = "service_xzmsvz5";
  const templateID = "template_if3snzf";
  const publicKey = "o3abIXSbb3C6L3DKP";
  const now = new Date();
  const dateTime = now.toLocaleString();

  const [formData, setFormData] = useState({
    FIRSTNAME: "",
    LASTNAME: "",
    EMAILADDRESS: "",
    CONTACT: "",
    MESSAGE: "",
  });

  const templateParams = {
    name: formData.FIRSTNAME + ", " + formData.LASTNAME,
    client_email: "jsglobalmarketing@myyahoo.com",
    glotti_email: "jay.romel.lawas@glottii.com",
    client_name: "JS Marketing Services",
    sender_name: "JS Marketing Mailer",
    title: "Website Visitor Inquiry",
    time: dateTime,
    message: `
    First Name: ${formData.FIRSTNAME}
    Last Name: ${formData.LASTNAME}
    Email Address: ${formData.EMAILADDRESS}
    Contact No.: ${formData.CONTACT}
    Message/Inquiry: ${formData.MESSAGE}
  `,
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (
        !formData.FIRSTNAME ||
        !formData.LASTNAME ||
        !formData.EMAILADDRESS ||
        !formData.CONTACT ||
        !formData.MESSAGE
      ) {
        showAlert("Please fill out all fields before sending.", "error");
        setLoading(false);
        return;
      }

      emailjs.send(serviceID, templateID, templateParams, publicKey).then(
        (response) => {
          setFormData({
            FIRSTNAME: "",
            LASTNAME: "",
            EMAILADDRESS: "",
            CONTACT: "",
            MESSAGE: "",
          });
          showAlert(
            "Thank you for reaching out to JS Marketing Services! We’ve received your inquiry and will get in touch soon to confirm.",
            "success"
          );
          setLoading(false);
        },
        (error) => {
          showAlert(
            "API Gateway error. Please contact Glotti Business Solutions at info@glottii.com",
            "error"
          );
        }
      );
    } catch (error) {
      showAlert(
        "API Gateway error. Please contact Glotti Business Solutions at info@glottii.com",
        "error"
      );
    }
  };

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
                      <input
                        type="text"
                        name="FIRSTNAME"
                        onChange={handleChange}
                        value={formData.FIRSTNAME}
                        placeholder="First Name*"
                      />
                    </Col>
                    <Col lg={6}>
                      <input
                        type="text"
                        name="LASTNAME"
                        onChange={handleChange}
                        value={formData.LASTNAME}
                        placeholder="Last Name*"
                      />
                    </Col>
                    <Col lg={6}>
                      <input
                        type="text"
                        name="EMAILADDRESS"
                        onChange={handleChange}
                        value={formData.EMAILADDRESS}
                        placeholder="Email Address*"
                      />
                    </Col>
                    <Col lg={6}>
                      <input
                        type="text"
                        name="CONTACT"
                        onChange={handleChange}
                        value={formData.CONTACT}
                        placeholder="Contact No.*"
                      />
                    </Col>

                    <Col lg={12}>
                      <textarea
                        name="MESSAGE"
                        id="message"
                        onChange={handleChange}
                        value={formData.MESSAGE}
                        placeholder="How can we help you?*"
                        defaultValue={""}
                      />
                    </Col>
                    <Col lg={12}>
                      {alert.visible && (
                        <div className={`alert-box ${alert.type}`}>
                          {alert.message}
                        </div>
                      )}

                      <br />
                    </Col>
                    <Col lg={12}>
                      <div className="btn-area">
                        <button
                          type="button"
                          className="header-btn1"
                          onClick={handleSubmit}
                        >
                          {loading ? (
                            <>
                              Submitting..
                              <span className="spinner"></span>
                            </>
                          ) : (
                            <>
                              SEND NOW{" "}
                              <span>
                                <FaArrowRight />
                              </span>
                            </>
                          )}
                        </button>
                      </div>
                    </Col>
                    {/* <Col lg={12}>
                      <div className="btn-area">
                        <button className="header-btn1">
                          Send Now{" "}
                          <span>
                            <FaArrowRight />
                          </span>
                        </button>
                      </div>
                    </Col> */}
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
