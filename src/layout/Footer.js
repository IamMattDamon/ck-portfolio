import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import footerLogo from "./../icons/namelogo.png";
import linkedIcon from "./../icons/linkedin.png";
import gitIcon from "./../icons/github.png";


export default function Footer() {
    return (
        <>
        <footer className="footer mt-auto py-2 bg-dark">
            <Container className="py-3">
                <Row className="align-items-center order-sort-fix">
                    <Col md={4} xs={{ order: 2 }} className="order-md-1 sm-flex">
                        <img src={footerLogo} alt="frode karlsen name logo" className="nav-logo" />
                    </Col>
                    <Col md={4} xs={{ order: 3 }} className="text-center order-md-2 sm-flex-btm">
                        <p className="secondary-font fs-sm mb-0">&#169;&nbsp;Code Karlsen 2020.&nbsp;All Rights Reserved</p>
                    </Col>
                    <Col md={4} xs={{ order: 1 }} className="sm-flex order-md-3 text-center">
                        <a href="https://www.linkedin.com/in/frode-karlsen-8a82a317/" target="_blank" rel="noreferrer">
                            <img src={linkedIcon} alt="linkedin icon" className="footer-icon mx-4" />
                        </a>
                        <a href="https://github.com/IamMattDamon?tab=repositories" target="_blank" rel="noreferrer">
                            <img src={gitIcon} alt="github icon" className="footer-icon" />
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
        </>
    );
}