import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { HashLink } from 'react-router-hash-link';
import { TypeAnimation } from 'react-type-animation';

export const Banner = () => {
  const [activeLink, setActiveLink] = useState('home');

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>
                  Hi! I'm Poorna Maheez{" "}
                  <TypeAnimation
                    sequence={[
                      "Python",
                      1000,
                      "Java",
                      1000,
                      "Software",
                      1000,
                      "Full-Stack",
                      1000,
                      "Backend",
                      1000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="txt-rotate"
                  />
                  {" "}Developer
                </h1>
                <p>Recent Computer Science graduate with hands-on experience in full-stack web development and machine learning. Skilled in Java, Python, ReactJS, and MySQL. Worked on real-world projects, including web applications and predictive models, during internships and personal projects. Seeking an entry-level software developer role to contribute technical skills and grow in a fast-paced environment.</p>
                <HashLink 
                  to="#connect" 
                  onClick={() => {
                    console.log('connect');
                    onUpdateActiveLink('contact');
                  }}
                >
                  <button className="vvd">
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                </HashLink>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
