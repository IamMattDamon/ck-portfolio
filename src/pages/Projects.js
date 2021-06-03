import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import recycleImage from "./../images/recycle.jpg";
import flowerImage from "./../images/flowerpower.jpg"
import hubspotImage from "./../images/hubspot.jpg";
import lethaImage from "./../images/letha.jpg";
import scienceImage from "./../images/science-museum.jpg";
import holidazeImage from "./../images/holidaze.jpg";

export default function Projects() {
    return (
        <>
        <main id="projects-main">
        <Container className="py-5 projects-container">
            <h1 className="mb-5 projects-header">
                <span className="primary-font fw-700 white">My</span>
                <span className="primary-font fw-700 grey ml-1">Projects</span>
            </h1>
            <Row>
                <Col lg={6} md={12} sm={12} className="order-sm-2 order-md-2 mt-sm-3 mt-lg-5">
                    <img src={recycleImage} alt="recycle page" className="project-image" />
                </Col>
                <Col lg={6} md={12} sm={12} className="order-sm-1 order-md-1 mt-sm-3 mt-lg-5">
                    <h2 className="primary-font fw-600 fs-3 white">ReCycle</h2>
                    <p className="secondary-font fw-400 fs-6 width-90">
                    A website for a bike tour company based in Croatia. This is one of the first 
                    web sites I created during my time at Noroff. The site is fully responsive 
                    with five pages in total. HTML and CSS only. The project will be reworked             
                    </p>
                    <a href="http://frochi.no/htmlcssv2/" className="btn accent-btn active mt-2 mb-3" role="button" target="_blank" rel="noreferrer">Go to page</a>
                </Col>
            </Row>
            
            <hr className="projects-hr" />

            <Row>
                <Col lg={6} md={12} sm={12} className="order-sm-1 order-md-1 order-lg-2 mt-sm-3 mt-lg-5">
                    <h2 className="primary-font fw-600 fs-3 white">Flower Power</h2>
                    <p className="secondary-font fw-400 fs-6 width-90">
                    This project is a flower store made in Wordpress. It's a fully responsive site containing 
                    four pages in total and a functional cart. This was created as a project during my 
                    time at Noroff with HTML and CSS           
                    </p>
                    <a href="https://frochi.no/flower-power/" className="btn accent-btn active mt-2 mb-3" role="button" target="_blank" rel="noreferrer">Go to page</a>
                </Col>
                <Col lg={6} md={12} sm={12} className="order-sm-2 order-md-2 order-lg-1 mt-sm-3 mt-lg-5">
                    <img src={flowerImage} alt="flower-power page" className="project-image" />
                </Col>
            </Row>

            <hr className="projects-hr" />
            
            <Row>
                <Col lg={6} md={12} sm={12}className="order-sm-2 order-md-2 mt-sm-3 mt-lg-5">
                    <img src={hubspotImage} alt="hubspot page" className="project-image" />
                </Col>
                <Col lg={6} md={12} sm={12} className="order-sm-1 order-md-1 mt-sm-3 mt-lg-5">
                    <h2 className="primary-font fw-600 fs-3 white">Hubspot</h2>
                    <p className="secondary-font fw-400 fs-6 width-90">
                    This was the project exam from year 1 at Noroff. In terms of design and code, I am not happy 
                    how the project turned out. The project will be revisited. The page is fully responsive with 
                    HTML, CSS, JavaScript and an API call through SpaceX's API          
                    </p>
                    <a href="https://frochi.no/project-exam-1/" className="btn accent-btn active mt-2 mb-3" role="button" target="_blank" rel="noreferrer">Go to page</a>
                </Col>
            </Row>

            <hr className="projects-hr" />

            <Row>
                <Col lg={6} md={12} sm={12} className="order-sm-1 order-md-1 order-lg-2 mt-sm-3 mt-lg-5">
                    <h2 className="primary-font fw-600 fs-3 white">Letha</h2>
                    <p className="secondary-font fw-400 fs-6 width-90">
                    Early project created in my first year at Noroff. This project is going to get a total 
                    reconstruction. This will ensure that it's going to be fully functional and redesigned. 
                    Not the project I am most proud of, but we all have to start somewhere. We had not learned
                    about frameworks yet and I struggled with understanding CSS
                    </p>
                    <a href="https://frochi.no/intdesign_ca_new/index.html/" className="btn accent-btn active mt-2 mb-3" role="button" target="_blank" rel="noreferrer">Go to page</a>
                </Col>
                <Col lg={6} md={12} sm={12} className="order-sm-2 order-md-2 order-lg-1 mt-sm-3 mt-lg-5">
                    <img src={lethaImage} alt="flower-power page" className="project-image" />
                </Col>
            </Row>

            <hr className="projects-hr" />

            <Row>
                <Col lg={6} md={12} sm={12} className="order-sm-2 order-md-2 mt-sm-3 mt-lg-5">
                    <img src={scienceImage} alt="science-museum page" className="project-image" />
                </Col>
                <Col lg={6} md={12} sm={12} className="order-sm-1 order-md-1 mt-sm-3 mt-lg-5">
                    <h2 className="primary-font fw-600 fs-3 white">Community Science Museum</h2>
                    <p className="secondary-font fw-400 fs-6 width-90">
                    My first semester project from year 1 at Noroff. CSS and HTML only. This page will 
                    be completely redesigned and changed. I've come a long way since in terms of design 
                    choices, thank god for that!       
                    </p>
                    <a href="https://frochi.no/sp1/" className="btn accent-btn active mt-2 mb-3" role="button" target="_blank" rel="noreferrer">Go to page</a>
                </Col>
            </Row>

            <hr className="projects-hr" />

            <Row>
                <Col lg={6} md={12} sm={12} className="order-sm-1 order-md-1 order-lg-2 mt-sm-3 mt-lg-5">
                    <h2 className="primary-font fw-600 fs-3 white">Holidaze</h2>
                    <p className="secondary-font fw-400 fs-6 width-90">
                    Final project exam at Noroff. We had to create a site called Holidaze for a local tourism 
                    agency based in Bergen. Created in React, server is hosted through Heroku, Strapi API and 
                    AWS S3 bucket. I've used Sass for CSS styling. This project shows the steps I have taken 
                    the past year in terms of design. The page is fully responsive. I also made a 20 page style 
                    guide for this exam, functional specification, site mapping, prototype, logo creation and 
                    a Gantt chart I followed.
                    </p>
                    <a href="https://holidaze-codekarlsen.netlify.app/" className="btn accent-btn active mt-2 mb-3" role="button" target="_blank" rel="noreferrer">Go to page</a>
                </Col>
                <Col lg={6} md={12} sm={12} className="order-sm-2 order-md-2 order-lg-1 mt-sm-3 mt-lg-5">
                    <img src={holidazeImage} alt="holidaze page" className="project-image" />
                </Col>
            </Row>

        </Container>
        </main>
        </>
    );
}