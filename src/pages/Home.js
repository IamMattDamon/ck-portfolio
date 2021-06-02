import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { FaHeart } from "react-icons/fa";
import { HiCode } from "react-icons/hi";
import cartoonImage from "./../images/cartoon-frode.jpg"; 
import jsIcon from "./../icons/javascript.png";
import htmlIcon from "./../icons/html5.png";
import css3Icon from "./../icons/css3.png";
import apiIcon from "./../icons/json-api.png";
import respIcon from "./../icons/responsive.png";
import wpIcon from "./../icons/wordpress.png";
import adobeIcon from "./../icons/adobe-new.png";
import bsIcon from "./../icons/bootstrap.png";
import seoIcon from "./../icons/seo.png";
import ganttIcon from "./../icons/gantt.png";
import reactIcon from "./../icons/react.png";
import tsIcon from "./../icons/typescript-new.png";
import uxuiIcon from "./../icons/ux-ui.png";

export default function Home() {
    return (
        <>
        <main id="index-main">
            <section className="home-heading">
            <Container className="mt-5 main-index-wrapper">
                <Row className="px-lg-5 px-md-3">
                    <Col md={6} sm={12} className="intro-margin-lg">
                        <h1 className="primary-font content-header-h1 altogrey fw-700">New player joined!</h1>
                        <h2 className="secondary-font content-subheader-h2 grey fw-600">Front-end developer</h2>
                        <h2 className="secondary-font content-subheader-h2 grey fw-600">I <FaHeart className="home-subheader-heart"/> to design and <HiCode className="home-subheader-code"/></h2>
                        <Link to={`/contact`}>
                            <Button className="accent-btn mt-2">
                                Add Player
                            </Button>
                        </Link>  
                    </Col>
                    <Col md={6} sm={12}>
                        <div className="inner">
                            <img src={cartoonImage} alt="avatar logo Frode Karlsen" className="avatar-img" />
                        </div>
                    </Col>
                </Row>
            </Container>
            </section>
            
            <div className="w-100"></div>
            
            <section className="home-skills">
            <Container className="mt-5 main-index-wrapper">
                <Row className="px-lg-5 px-md">
                    <Col md={6} sm={12}>
                        <h2 class="content-heading-h2 fw-600 mt-5 mb-3">Skills</h2>
                    </Col>
                </Row>
                <Row className="px-lg-5 px-md">
                    <Col md={3} xs={6} className="d-flex flex-row">
                        <div className="align-center">
                            <img src={jsIcon} alt="javascript icon" className="skills-icon"/>
                            <span className="ml-2 skills-span-text">Javascript</span>
                        </div>
                    </Col>
                    <Col md={3} xs={6} className="d-flex flex-row">
                        <div className="align-center">
                            <img src={htmlIcon} alt="html5 icon" className="skills-icon" />
                            <span className="ml-2 skills-span-text">HTML</span>
                        </div>
                    </Col>
                    <Col md={3} xs={6} className="d-flex flex-row col-fix-margin">
                        <div className="align-center">
                            <img src={css3Icon} alt="css3 icon" className="skills-icon" />
                            <span className="ml-2 skills-span-text">CSS3</span>
                        </div>
                    </Col>
                    <Col md={3} xs={6} className="d-flex flex-row col-fix-margin">
                        <div className="align-center">
                            <img src={bsIcon} alt="bootstrap icon" className="skills-icon" />
                            <span className="ml-2 skills-span-text">Bootstrap</span>
                        </div>   
                    </Col>
                    <Col md={3} xs={6} className="d-flex flex-row mt-sm-2">
                        <div className="align-center">
                            <img src={apiIcon} alt="rest api icon" className="skills-icon" />
                            <span className="ml-2 skills-span-text">REST Api</span>
                        </div>
                    </Col>
                    <Col md={3} xs={6} className="d-flex flex-row mt-sm-2">
                        <div className="align-center">
                            <img src={respIcon} alt="responsive design icon" className="skills-icon" />
                            <span className="ml-2 skills-span-text">Responsive</span>
                        </div>
                    </Col>
                    <Col md={3} xs={6} className="d-flex flex-row mt-sm-2">
                        <div className="align-center">
                            <img src={wpIcon} alt="wordpress icon" className="skills-icon" />
                            <span className="ml-2 skills-span-text">Wordpress</span>
                        </div>
                    </Col>
                    <Col md={3} xs={6} className="d-flex flex-row mt-sm-2">
                        <div className="align-center">
                            <img src={adobeIcon} alt="adobe icon" className="skills-icon" />
                            <span className="ml-2 skills-span-text">Adobe</span>
                        </div>
                    </Col>
                    <Col md={3} xs={6} className="d-flex flex-row mt-sm-2">
                        <div className="align-center">
                            <img src={seoIcon} alt="SEO icon" className="skills-icon" />
                            <span className="ml-2 skills-span-text">SEO</span>
                        </div>
                    </Col>
                    <Col md={3} xs={6} className="d-flex flex-row mt-sm-2">
                        <div className="align-center">
                            <img src={ganttIcon} alt="gantt icon" className="skills-icon" />
                            <span className="ml-2 skills-span-text">Gantt</span>
                        </div>
                    </Col>
                    <Col md={3} xs={6} className="d-flex flex-row mt-sm-2">
                        <div className="align-center">
                            <img src={reactIcon} alt="react icon" className="skills-icon" />
                            <span className="ml-2 skills-span-text">React</span>
                        </div>
                    </Col>
                    <Col md={3} xs={6} className="d-flex flex-row mt-sm-2">
                        <div className="align-center">
                            <img src={tsIcon} alt="typescript icon" className="skills-icon" />
                            <span className="ml-2 skills-span-text">Typescript</span>
                        </div>
                    </Col>
                    <Col md={3} xs={6} className="d-flex flex-row mt-sm-2">
                        <div className="align-center">
                            <img src={uxuiIcon} alt="ux/ui icon" className="skills-icon" />
                            <span className="ml-2 skills-span-text">UX/UI</span>
                        </div>
                    </Col>
                </Row>
            </Container>
            </section>
            <section>
                
            </section>

        </main>
        </>
    );
}