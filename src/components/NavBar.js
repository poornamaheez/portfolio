import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => setActiveLink(value);

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('projects')}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a 
                className="linkedin"
                href="https://www.linkedin.com/in/poorna-maheez-uppala-45b502217"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  src={navIcon1}
                  alt=""
                />              
              </a>
              <a 
                className="github"
                href="https://github.com/poornamaheez"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  // style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius:'50%'}}
                  src={navIcon2}
                  alt=""
                />              
              </a>
              {/* <img a href="#" className="github" src={navIcon2} alt="" /> */}
              {/* <a href="#"><img src={navIcon3} alt="" /></a> */}
            </div>
            <HashLink to="#connect" onClick={() => onUpdateActiveLink('contact')}>
              <button className="vvd"><span>Let’s Connect</span></button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
