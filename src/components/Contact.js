import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    // Collect form data
    // const formData = new FormData(e.target);
    // const formDetails = {
    //   firstName: formData.get('firstName') || '',
    //   email: formData.get('email') || '',
    //   phnNo: formData.get('phnNo') || '',
    //   message: formData.get('message') || ''
    // };

    // Log inputs to console
    // console.log("Name:", formDetails.firstName);
    // console.log("Email:", formDetails.email);
    // console.log("Number:", formDetails.phnNo);
    // console.log("Message:", formDetails.message);
    // console.log(formDetails);

    emailjs.sendForm('service_xe8zt5i', 'template_ajjz01q', e.target, 'm-9TJou63hhefq9gN')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus({ success: true, message: 'Your message has been sent successfully!' });
      })
      .catch((error) => {
        console.log('FAILED...', error);
        setStatus({ success: false, message: 'Failed to send your message. Please try again.' });
      })
      .finally(() => {
        setButtonText("Sent");
      });

    e.target.reset(); // Clear the form after submission
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Me"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      {/* First Row: Name and Phone Number */}
                      <Col size={12} sm={6} className="px-1">
                        <input name="firstName" type="text" placeholder="Name" required />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input name="phnNo" type="tel" placeholder="Phone Number" required />
                      </Col>
                    </Row>
                    {/* Second Row: Email Address */}
                    <Row>
                      <Col size={12} className="px-1">
                        <input className="emailAddr" name="email" type="email" placeholder="Email Address" required style={{ width: "100%" }} />
                      </Col>
                    </Row>
                    {/* Third Row: Message */}
                    <Row>
                      <Col size={12} className="px-1">
                        <textarea name="message" rows="6" placeholder="Message" required></textarea>
                      </Col>
                    </Row>
                    {/* Submit Button Row */}
                    <Row>
                      <Col size={12} className="px-1">
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                    </Row>
                    {/* Status Message */}
                    {status.message && (
                      <Row>
                        <Col>
                          <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        </Col>
                      </Row>
                    )}
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
