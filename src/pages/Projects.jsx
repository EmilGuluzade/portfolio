import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";

import FoxicEcommerce from "../assets/projects/FoxicEcommerce.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FoxicEcommerce}
              isBlog={false}
              title="E‑Commerce Website"
              description="This ecommerce website utilizes a REST API built with Nodejs and Expressjs, allowing for easy CRUD operations on user profiles, products , blogsand admin panel. The user interface is designed for efficient product management . The admin panel, accessible for CRUD on users , blogs and products. The website uses MongoDB  as the database."
              ghLink="https://github.com/EmilGuluzade/final-project"
              // demoLink="https://project-krypto.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
