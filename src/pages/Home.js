import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { FaHeart } from "react-icons/fa";
import { HiCode } from "react-icons/hi";
import cartoonImage from "./../images/cartoon-frode.jpg"; 
import jsIcon from "./../icons/javascript.png";

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
                            <img src={cartoonImage} alt="avatar image of Frode Karlsen" className="avatar-img" />
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
                    <Col sm={3} className="d-flex flex-row">
                        <img src={jsIcon} alt="javascript icon" className="skills-icon"/>
                        <span className="ml-2 skills-span-text">Javascript</span>
                    </Col>
                    <Col sm={3} className="d-flex flex-row">
                        
                        <span className="ml-2 skills-span-text">HTML</span>
                    </Col>
                    <Col sm={3} className="d-flex flex-row">
                        
                        <span className="ml-2 skills-span-text">Bootstrap</span>
                    </Col>
                    <Col sm={3} className="d-flex flex-row">
                        
                        <span className="ml-2 skills-span-text">Wordpress</span>
                    </Col>
                </Row>
            </Container>
            </section>

        </main>
        </>
    );
}