import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import logo from "../../assets/eLogo.png";

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return (
      <Container fluid className="footer">
        <Row>
          <Col md="4" className="footer-copywright">
            <span>Dedicated to creating impactful solutions!</span>
          </Col>
          <Col md="4" className="footer-copywright">
            <span>Copyright © {year}</span>
            <img src={logo} className="img-fluid logo" alt="brand" />
          </Col>
          <Col md="4" className="footer-body">
            <ul className="footer-icons">
              <li className="social-icons">
                <a
               href="https://github.com/EmilGuluzade"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                 href="https://www.instagram.com/emilqlzd"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                                        aria-label="instagram"
                >
                      <AiOutlineInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                 href="https://www.linkedin.com/in/emil-quluzade-4a328327a/"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
           
            </ul>
          </Col>
        </Row>
      </Container>
    );  
}

export default Footer