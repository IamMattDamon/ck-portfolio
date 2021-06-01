import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import footerLogo from "./../icons/namelogo.png";
import linkedIcon from "./../icons/linkedin.png";
import gitIcon from "./../icons/github.png";


export default function Footer() {
    return (
        <>
        <Footer className="footer mt-auto py-2">
            <Container className="py-3">
                <Row className="align-items-center">
                    <Col md={4} className="order-sm-2 order-md-1 sm-flex">
                        <img src={footerLogo} alt="frode karlsen name logo" className="nav-logo" />
                    </Col>
                    <Col md={4} className="text-center order-sm-3 order-md-2 sm-flex-btm">
                        <p class="secondary-font fs-6 mb-0">&#169;&nbsp;2020.&nbsp;All Rights Reserved</p>
                    </Col>
                    <Col md={4} className="sm-flex order-sm-1 order-md-3">
                        <a href="https://www.linkedin.com/in/frode-karlsen-8a82a317/" target="_blank" rel="noreferrer">
                            <img src={linkedIcon} alt="linkedin icon" className="footer-icon me-3" />
                        </a>
                        <a href="https://github.com/IamMattDamon?tab=repositories" target="_blank" rel="noreferrer">
                            <img src={gitIcon} alt="github icon" className="footer-icon" />
                        </a>
                    </Col>
                </Row>
            </Container>
        </Footer>
        </>
    );
}