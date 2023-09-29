import React from "react";
import { useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import Project1 from "../assets/img/projecto1.png";
import Project2 from "../assets/img/projecto2.png";
import Project3 from "../assets/img/projecto3.png";
import project4 from "../assets/img/projecto4.png";

export const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="projects" id="projects">
      <Container>
        <h1 data-aos="fade-down" className="projectsh1">
          Projects
        </h1>
        <br />
        <p className="pprojects">
          I have experience working with JavaScript, React.js, Node.js FireBase,
          Git, Boostrap and more, and I am always excited to take on new
          challenges. In my free time, I enjoy experimenting with new
          technologies and working on personal coding projects. I am a firm
          believer in open-source software and have contributed to several
          open-source projects over the years.<br></br> Overall, I am a
          dedicated and motivated developer who is passionate about technology
          and creating elegant, efficient solutions. If you are looking for a
          talented and committed developer for your team, I would love to hear
          from you!
        </p>
        <h2 className="h2projects">Web Pages / Apps / Design</h2>
        <Row className="aligh-items-center">
          <Col className="colproject">
            <div className="projectdiv">
              <img
                src={Project1}
                alt="project1"
                data-aos="fade-down"
                className="projectsimg"
              />
              <div className="projectoverlay">
                <div className="projecttittle">Vicenteperez.com</div>
                <p className="projectdesc">
                  Profesional profile website for Vicente perez lawyer.
                </p>
                <div className="buttondiv">
                  <a
                    href="https://vicente-perez.web.app/"
                    className="buttonproject"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="projectdiv">
              <img
                src={Project3}
                alt="project3"
                data-aos="fade-down"
                className="projectsimg"
              />
              <div className="projectoverlay">
                <div className="projecttittle">
                  TeraVisionGames landing Page
                </div>
                <p className="projectdesc">
                  Demo from assets for a landing page for a videogame company.
                </p>
                <div className="buttondiv">
                  <a
                    href="https://tera-vision-web.web.app/"
                    className="buttonproject"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="projectdiv">
              <img
                src={Project2}
                alt="project2"
                data-aos="fade-down"
                className="projectsimg"
              />
              <div className="projectoverlay">
                <div className="projecttittle">Film Finder</div>
                <p className="projectdesc">
                  Selects a category and calls an external API for shows a
                  random movie.
                </p>
                <div className="buttondiv">
                  <a
                    href="https://hugojaimeb.github.io/Random-Film/"
                    className="buttonproject"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="projectdiv">
              <img
                src={project4}
                alt="project4"
                data-aos="fade-down"
                className="projectsimg"
              />
              <div className="projectoverlay">
                <div className="projecttittle">JuniorMon</div>
                <p className="projectdesc">
                  Pokemon GameStyle develop with JavaScript vanilla and CSS.
                </p>
                <div className="buttondiv">
                  <a
                    href="https://hugojaimeb.github.io/JuniorMon/"
                    className="buttonproject"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
