import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { FaReact } from "react-icons/fa";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiBootstrap } from "react-icons/di";
import { DiSass } from "react-icons/di";
import { DiResponsive } from "react-icons/di";
import { DiWordpress } from "react-icons/di";
import { DiChrome } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { BiCodeCurly } from "react-icons/bi";
import { RiTableLine } from "react-icons/ri";
import { DiIllustrator } from "react-icons/di"
import { DiPhotoshop } from "react-icons/di";
import { DiPostgresql } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaAdobe } from "react-icons/fa";

export default function SkillsIcons() {
  return (
    <>
      <Container className="mt-5 main-index-wrapper">
        <Row className="px-lg-5 px-md-2">
          <Col md={6} sm={12}>
            <h2 className="content-heading-h2 fw-600 mt-5 mb-4">Skills</h2>
          </Col>
        </Row>
        <Row className="px-lg-5 px-md">
          <Col md={3} sm={6} xs={12} className="d-flex flex-row media-align-center col-fix-margin">
            <div className="align-center">        
              <IoLogoJavascript className="skills-icons"/>
              <span className="ml-2 skills-span-text">Javascript</span>
            </div>
          </Col>
          <Col md={3} sm={6} xs={12} className="d-flex flex-row media-align-center col-fix-margin">
            <div className="align-center">
              <DiHtml5 className="skills-icons" />
              <span className="ml-2 skills-span-text">HTML</span>
            </div>
          </Col>
          <Col md={3} sm={6} xs={12} className="d-flex flex-row col-fix-margin media-align-center">
            <div className="align-center">
              <DiCss3 className="skills-icons" />
              <span className="ml-2 skills-span-text">CSS3</span>
            </div>
          </Col>
          <Col md={3} sm={6} xs={12} className="d-flex flex-row col-fix-margin media-align-center">
            <div className="align-center">
              <DiSass className="skills-icons" />
              <span className="ml-2 skills-span-text">SASS</span>
            </div>
          </Col>
          <Col md={3} sm={6} xs={12} className="d-flex flex-row mt-sm-3 col-fix-margin media-align-center">
            <div className="align-center">
              <DiBootstrap className="skills-icons" />
              <span className="ml-2 skills-span-text">Bootstrap</span>
            </div>
          </Col>
          <Col md={3} sm={6} xs={12} className="d-flex flex-row mt-sm-3 media-align-center col-fix-margin">
            <div className="align-center">
              <BiCodeCurly className="skills-icons" />
              <span className="ml-2 skills-span-text">REST Api</span>
            </div>
          </Col>
          <Col md={3} sm={6} xs={12} className="d-flex flex-row mt-sm-3 media-align-center col-fix-margin">
            <div className="align-center">
              <DiPostgresql className="skills-icons" />
              <span className="ml-2 skills-span-text">Postgresql</span>
            </div>
          </Col>
          <Col md={3} sm={6} xs={12} className="d-flex flex-row mt-sm-3 media-align-center col-fix-margin">
            <div className="align-center">
              <DiResponsive className="skills-icons"/>
              <span className="ml-2 skills-span-text">Responsive</span>
            </div>
          </Col>
          <Col md={3} sm={6} xs={12} className="d-flex flex-row mt-sm-3 media-align-center col-fix-margin">
            <div className="align-center">
              <DiWordpress className="skills-icons" />
              <span className="ml-2 skills-span-text">Wordpress</span>
            </div>
          </Col>
          <Col md={3} sm={6} xs={12} className="d-flex flex-row mt-sm-3 media-align-center col-fix-margin">
            <div className="align-center">
              <FaAdobe className="skills-icons"/>
              <span className="ml-2 skills-span-text">Adobe</span>
            </div>
          </Col>
          <Col md={3} sm={6} xs={12} className="d-flex flex-row mt-sm-3 media-align-center col-fix-margin">
            <div className="align-center">
              <DiIllustrator className="skills-icons"/>
              <span className="ml-2 skills-span-text">Illustrator</span>
            </div>
          </Col>
          <Col md={3} sm={6} xs={12} className="d-flex flex-row mt-sm-3 media-align-center col-fix-margin">
            <div className="align-center">
              <DiPhotoshop className="skills-icons"/>
              <span className="ml-2 skills-span-text">Photoshop</span>
            </div>
          </Col>
          <Col md={3} sm={6} xs={12} className="d-flex flex-row mt-sm-3 media-align-center col-fix-margin">
            <div className="align-center">
              <DiChrome className="skills-icons"/>
              <span className="ml-2 skills-span-text">SEO</span>
            </div>
          </Col>
          <Col md={3} sm={6} xs={12} className="d-flex flex-row mt-sm-3 media-align-center col-fix-margin">
            <div className="align-center">
              <RiTableLine className="skills-icons" />
              <span className="ml-2 skills-span-text">Gantt</span>
            </div>
          </Col>
          <Col md={3} sm={6} xs={12} className="d-flex flex-row mt-sm-3 media-align-center col-fix-margin">
            <div className="align-center">
              <FaReact className="skills-icons"/>
              <span className="ml-2 skills-span-text">React</span>
            </div>
          </Col>
          <Col md={3} sm={6} xs={12} className="d-flex flex-row mt-sm-3 media-align-center col-fix-margin">
            <div className="align-center">
              <SiTypescript className="skills-icons-typescript" />
              <span className="ml-2 skills-span-text">Typescript</span>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}