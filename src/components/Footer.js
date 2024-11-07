import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import telegram from "../assets/img/telegram.svg";
import whatsapp from "../assets/img/whatsapp.svg";
import instagram from "../assets/img/nav-icon3.svg";
import twitter from "../assets/img/x.svg"


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          <p>Connect with me on my social media platforms.</p>
            <div className="social-icon">
              <a href="https://wa.me/917337231997"
                  target="_blank"
                  rel="noopener noreferrer" className="whatsapp"
                >
                <img src={whatsapp} alt="Icon" />
              </a>
              <a href="https://t.me/Poorna_maheez"
                  target="_blank"
                  rel="noopener noreferrer" className="telegram"
                >
                <img src={telegram} alt="Icon" />
              </a>
              <a  href="https://www.instagram.com/poorna_814"
                  className="instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <img src={instagram} alt="Icon" />
              </a>
              <a  href="https://x.com/PoornaMaheez814"
                  className="twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <img src={twitter} alt="Icon" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
