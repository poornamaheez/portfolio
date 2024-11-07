import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import education from "../assets/data/education.json";
import profileImage from "../assets/img/profile.jpg";

export const AboutMe = () => {
  const ResumeButton = (e) =>{
    
    window.open("https://drive.google.com/file/d/1uby2fPuj-2K3HJ3wN3I-PnLiZUd2EB-n/view?usp=drive_link","_blank", "noopener noreferrer");
  };
  return (
    <div className="about-me">
      <h2>About Me</h2>
      <Container>
        <Row>
          <Col xs={10} md={6}>
            <table className="details-table">
              <tbody>
                <tr>
                  <td><strong>Name</strong></td>
                  <td>:</td>
                  <td>Poorna Maheez Uppala</td>
                </tr>
                <tr>
                  <td><strong>Father's Name</strong></td>
                  <td>:</td>
                  <td>Madhu Sudhana Uppala</td>
                </tr>
                <tr>
                  <td><strong>Mother's Name</strong></td>
                  <td>:</td>
                  <td>Madhavi Uppala</td>
                </tr>
                <tr>
                  <td><strong>Date of Birth</strong></td>
                  <td>:</td>
                  <td>8<sup>th</sup> July 2000</td>
                </tr>
                <tr>
                  <td><strong>Permanent Address</strong></td>
                  <td>:</td>
                  <td style={{ whiteSpace: "pre-wrap", overflowWrap: "anywhere" }}>
                    8-401,<br />Maheswari Nagar,<br />Mulapet, Nellore,<br />PIN:524003
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>
          <Col xs={10} md={6} className="text-center profile-column">
            <img src={profileImage} alt="Profile" className="profile-image" />
            <button onClick={ResumeButton}
                          className="download-resume">
              Download My Resume
            </button>
          </Col>
        </Row>
        <div className="educ-table">
          <h1>Education</h1>
          <div style={{ overflowX: "auto" }}>
            <table>
              <thead>
                <tr>
                  <th>Degree/Course</th>
                  <th>Institution</th>
                  <th>University</th>
                  <th>Year Passed</th>
                  <th>Percentage</th>
                </tr>
              </thead>
              <tbody>
                {education.map((item) => (
                  <tr key={item.id}>
                    <td>{item.degree}</td>
                    <td>{item.institution}</td>
                    <td>{item.university}</td>
                    <td>{item.year}</td>
                    <td>{item.percentage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
        </div>
        <div className='mydata'>
        <h1>Certifications</h1>
        <ul>
          <li>Azure AI developer, Microsoft.</li>
        </ul>
        <h1>Achievements/Awards</h1>
        <ul>
          <li>Secured 2nd position at the National Science Expo held at JNTUA.</li>
        </ul>  
        <h1>Strengths</h1>
        <ul>
          <li>Self-confidence and hard work</li>
          <li>Team player</li>
          <li>Optimistic</li>
          <li>Patience</li>
          <li>Perseverance</li>
          <li>Honesty</li>
        </ul>
        <h1>Hobbies</h1> 
        <ul>
          <li>Surfing web</li>
          <li>Listening Music</li>
          <li>Playing games</li>
        </ul>   
        </div>
      </Container>
    </div>
  );
};
