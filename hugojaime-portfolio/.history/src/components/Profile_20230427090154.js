import React from "react";
import { useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import ProfilePic from "../assets/img/Perfil CV.jpeg";
import JsLogo from "../assets/img/js.png";
import HtmlLogo from "../assets/img/html.png";
import CssLogo from "../assets/img/css-3.png";
import BsLogo from "../assets/img/bootstrap.png";
import ReactLogo from "../assets/img/react_original_wordmark_logo_icon_146375.png";
import Aos from "aos";
import "aos/dist/aos.css";

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
              Who Am I ?{" "}
            </h1>
            <br />
            <br />
            <p data-aos="fade-down" className="pprofile">
              Hello, my name is <p>Hugo Jaime</p>, and I am a software developer
              with a passion for exploring new technologies and creating
              innovative solutions. With 3years of experience in the field, I
              have honed my skills in various programming languages and
              platforms. My interests in new technologies stem from my belief
              that they have the power to transform the world, and I am always
              eager to learn about the latest advancements in the field.
              <br></br> I am particularly interested in [mention some specific
              technologies that you are interested in], and I stay up-to-date
              with the latest developments in these areas. Throughout my career,
              I have worked on a diverse range of projects, from creating mobile
              apps to building complex enterprise systems. I have experience
              working with [mention some programming languages, platforms, or
              tools that you have worked with], and I am always excited to take
              on new challenges. In my free time, I enjoy experimenting with new
              technologies and working on personal coding projects. I am a firm
              believer in open-source software and have contributed to several
              open-source projects over the years. Overall, I am a dedicated and
              motivated developer who is passionate about technology and
              creating elegant, efficient solutions. If you are looking for a
              talented and committed developer for your team, I would love to
              hear from you!
            </p>
            <h2 data-aos="fade-down" className="profileh2">
              My Weapons Are :
            </h2>
            <img
              data-aos="flip-left"
              src={JsLogo}
              alt="jslogo"
              className="jslogo"
            />
            <img
              data-aos="flip-left"
              src={HtmlLogo}
              alt="htmllogo"
              className="jslogo"
            />
            <img
              data-aos="flip-left"
              src={CssLogo}
              alt="csslogo"
              className="jslogo"
            />
            <img
              data-aos="flip-left"
              src={BsLogo}
              alt="bslogo"
              className="jslogo"
            />
            <img
              data-aos="flip-left"
              src={ReactLogo}
              alt="reactlogo"
              className="jslogo"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
