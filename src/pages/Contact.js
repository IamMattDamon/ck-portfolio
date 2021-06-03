import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Contact() {

return (
    <>
      <div className="all-but-footer">
      <main id="contact-main">
        <Container className="contact-container">
          <div className="form-wrapper">
            <Form id="contactForm">
              <Row className="mt-3">
                <Col sm={12} md={6}>
                  <Form.Group controlId="contactForm.ControlInput1">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                      name="fist_name"
                      placeholder="Enter first name"
                    />

                  </Form.Group>
                </Col>
                <Col sm={12} md={6}>
                  <Form.Group controlId="contactForm.ControlInput2">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                      name="last_name"
                      placeholder="Enter last name"
                    />

                  </Form.Group>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col sm={12}>
                  <Form.Group controlId="contactForm.ControlInput3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      name="email"
                      type="email"
                      placeholder="Enter email address"
                    />                
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col sm={12}>
                  <Form.Group controlId="contactForm.TextArea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      name="message"
                      as="textarea"
                      placeholder="Enter your message here"
                      rows="8"
                    />
                  </Form.Group>
                </Col>
              </Row>
                <Button type="submit" className="btn accent-btn mt-2">
                  Submit message
                </Button>
    
            </Form>
          </div>
        </Container>
      </main>
      </div>
    </>
  );
}