import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import './Social.css'

const Social = () => {
  return (
    <Container style={{padding: '30px'}}>
    <Row>
              <Col md={12} className="contact-social">
                <div className='contact-text'>
                <h1>FIND ME ON</h1>
                <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
                </div>
                <ul className="contact-social-links">
                  <li className="contact-icons">
                  <a
               href="https://github.com/EmilGuluzade"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel=" noreferrer"
                  aria-label="github"
                  className="contact-social-icons"
                >
                  <AiFillGithub />
                    </a>
                  </li>
                  <li className="contact-icons">
                  <a
                 href="https://www.instagram.com/emilqlzd"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noreferrer"
                  aria-label="instagram"
                   className="contact-social-icons"
                >
                      <AiOutlineInstagram />
                </a>
                  </li>
                  <li className="contact-icons">
                  <a
                 href="https://www.linkedin.com/in/emil-quluzade-4a328327a/"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noreferrer"
                   className="contact-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                    </a>
                  </li>
                
                </ul>
              </Col>
            </Row>
          </Container>
  )
}

export default Social