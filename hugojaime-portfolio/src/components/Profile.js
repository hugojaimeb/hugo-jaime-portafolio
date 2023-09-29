import React from "react";
import { useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import ProfilePic from "../assets/img/Profile-Picture.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import LogosRender from "./logosComponents/LogosRender";

export const Profile = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="profile" id="profile">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={5} className="profilecol">
            <img data-aos="fade-up" src={ProfilePic} alt="profilepic" />
          </Col>

          <Col xs={12} md={6} xl={7}>
            <h1 data-aos="fade-down" className="profileh1">
              Meet Hugo Jaime: Innovative Software Developer{" "}
            </h1>
            <br />
            <br />
            <p data-aos="fade-down" className="pprofile">
              Hey there, I'm Hugo Jaime, a tech enthusiast with 5 years of
              software development experience. I'm passionate about exploring
              new technologies, and I specialize in MySQL, Mongo.js, TypeScript,
              and React Advanced. I've worked on diverse projects, from mobile
              apps to complex enterprise systems. Let's create something amazing
              together!
            </p>
            <h2 data-aos="fade-down" className="profileh2">
              My Weapons Are :
            </h2>
            <LogosRender />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
