import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export default function Home() {
    return (
        <>
        <main id="index-main">
            <Container className="mt-3 main-index-wrapper">
                <Row className="px-lg-5 px-md-3">
                    <Col md={6} sm={12}>
                        <h1>New player joined!</h1>
                        <h2>Front-end developer</h2>
                        <h2>I love to design and code things&#33;</h2>
                        <Link to={`/contact`}>
                            <Button className="accent-btn mt-2">
                                Add Player
                            </Button>
                        </Link>  
                    </Col>
                </Row>
            </Container>
        </main>
        </>
    );
}