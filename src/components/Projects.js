import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import fakeNews from "../assets/img/fake-news.jpg";
import marksPrediction from "../assets/img/prediction-of-marks.jpg";
import quizApp from "../assets/img/quiz-app.jpg";
import parkinson from "../assets/img/parkinsons-desease.jpg";
import plotMyData from "../assets/img/plotmydata.jpg";
import kenexoft from "../assets/img/kenexoft.jpg";
import sdg from "../assets/img/sustainable-development-goals.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { AboutMe } from "./Aboutme";

export const Projects = () => {

  const projects = [
    {
      title: "Fake News Detection",
      description: "Identifies and filters out fake news to improve the accuracy of information, helping to maintain credibility in news platforms.",
      imgUrl: fakeNews,
      url: "https://github.com/poornamaheez/plot-my-data/tree/main/fake-news-detection"
    },
    {
      title: "Prediction Of Marks",
      description: "Estimates students' future performance to help educators and institutions plan personalized learning strategies.",
      imgUrl: marksPrediction,
      url: "https://github.com/poornamaheez/plot-my-data/tree/main/prediction-of-marks"

    },
    {
      title: "Quiz Application",
      description: "Hosts and manages multiple-choice quizzes, offering an interactive learning and assessment platform.",
      imgUrl: quizApp,
      url: "https://github.com/poornamaheez/quiz-app"
    },
    {
      title: "Detection Of Parkinson's Desease",
      description: "Detects early signs of Parkinson’s disease through patterns in patient drawings, aiding in early diagnosis and intervention.",
      imgUrl: parkinson,
      url: "https://github.com/poornamaheez/parkinson-desease"
    },
  ];

  
  const myinternships = [
    {
      title: "Data Science by Plot My Data: 1stop",
      description: "Focused on data science techniques and applications, building analytical skills for data-driven problem-solving.",
      imgUrl: plotMyData,
      url: "https://drive.google.com/file/d/1Tz66O1TD5cyGVm6d-AAlwc5zcsGLTXVc/view?usp=drive_link"
    },
    {
      title: "Software Engineer Intern: Kenexoft",
      description: "Developed an ATS system to streamline recruitment by matching resumes to job descriptions, enhancing hiring efficiency.",
      imgUrl: kenexoft,
      url: "https://drive.google.com/file/d/1_S_gKu3pdIasADUbOyYMUIN-KnU6I5Ah/view?usp=drive_link"
    },
    {
      title: "Sustainable Development Goals: PMG Team Tirupati",
      description: "Contributed to a web application for tracking Sustainable Development Goals, supporting local governments in monitoring and progress reporting.",
      imgUrl: sdg,
      url: "https://drive.google.com/file/d/1mAMd4vgVj6orRQTOiGdZgkIKelYbW8kE/view?usp=drive_link"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div>
                
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first" className="first-tab">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second" className="second-tab">Internships</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third" className="third-tab">About Me</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" >
                    <Tab.Pane eventKey="first">
                    <h2>Projects</h2>
                    <p>Throughout my journey, I have worked on diverse projects that showcase my ability to apply 
                      technical knowledge in real-world scenarios. These projects span areas like web development, 
                      data science, machine learning, and automation, reflecting my passion for problem-solving and 
                      continuous learning.</p>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <h2>Internships</h2>
                      <p>My internships have provided invaluable hands-on experience, allowing me to develop 
                        and implement solutions in fields like NLP, web development, and data analysis. Working 
                        on projects from ad prediction to SDG tracking, I gained insights into practical 
                        applications and collaboration within professional teams.</p>
                      <Row>
                        {
                          myinternships.map((internship, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...internship}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third" style={{
        animation: 'none',
        animationDuration: '0s',
        animationDelay: '0s',
        animationIterationCount: '0',
        transition: 'none'
      }}>
                      <AboutMe />
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  )
}
