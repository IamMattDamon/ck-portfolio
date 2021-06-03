import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { FaHeart } from "react-icons/fa";
import { HiCode } from "react-icons/hi";
import cartoonImage from "./../images/cartoon-frode.jpg";
import SkillsIcons from "./../components/SkillsIcons"; 

export default function Home() {
  return (
    <>
      <main id="index-main">
        <section className="home-heading">
          <Container className="mt-5 main-index-wrapper">
            <Row className="px-lg-5 px-md-3 column-order-fix">
              <Col md={6} sm={12} xs={{ order: 2 }} className="intro-margin-lg order-md-1">
                <h1 className="primary-font content-header-h1 altogrey fw-700">
                  New player joined!
                </h1>
                <h3 className="secondary-font content-subheader-h2 grey fw-600">
                  Front-end developer
                </h3>
                <h3 className="secondary-font content-subheader-h2 grey fw-600">
                  I <FaHeart className="home-subheader-heart" /> to design and{" "}
                  <HiCode className="home-subheader-code" />
                </h3>
                <Link to={`/contact`}>
                  <Button className="accent-btn mt-2">Add Player</Button>
                </Link>
              </Col>
              <Col md={6} sm={12} xs={{ order: 1 }} className="avatar-col order-md-2">
                <div className="inner">
                  <img
                    src={cartoonImage}
                    alt="avatar logo Frode Karlsen"
                    className="avatar-img"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <div className="w-100"></div>

        <section className="home-skills mb-5">
          <SkillsIcons />
          <div className="w-100 mt-2"></div>
          <Container>
            <Row className="px-lg-5 px-md-3">
              <Col md={6} sm={12} className="d-flex flex-row mt-5 media-align-fix">
                <h2 className="secondary-font number-header fw-400 number-fs">
                  2
                </h2>
                <div className="d-flex flex-column mt-2 ml-2">
                  <h3 className="secondary-font mt-1 mb-1 ms-2 fw-400 text-fs">
                    YEARS
                  </h3>
                  <h3 className="secondary-font ms-2 fw-400 text-fs">
                    EXPERIENCE
                  </h3>
                </div>
                <h2 className="secondary-font number-header fw-400 number-fs ml-3">
                  11
                </h2>
                <div className="d-flex flex-column mt-2 ml-2">
                  <h3 className="secondary-font mt-1 mb-1 ms-2 fw-400 text-fs">
                    PROJECTS
                  </h3>
                  <h3 className="secondary-font ms-2 fw-400 text-fs">
                    COMPLETED
                  </h3>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <section id="home-intro">
          <Container>
              <Row className="px-lg-5 px-md-3">
                <Col lg={6} md={12} className="mt-5 mb-lg-5 px-4">
                    <h2 className="primary-font fw-600 fs-2 content-heading-h2">Introduction</h2>
                    <div className="intro-paragraph-container">
                        <p className="secondary-font fw-400 mt-4">
                        My name is Frode Karlsen. I am a 37 year old man from Norway. Just finished 2 years of 
                        studying front-end development at Noroff. I am still learning the ropes of the trade. 
                        Currently looking for a development job in Kristansand.
                        </p>
                        <p className="secondary-font fw-400 mt-4">
                        My friends would describe me as a friendly and funny guy, always up for a good laugh. 
                        At the workplace, I would say my strengths are a good eye for details, I am creative, 
                        patient, honest and trustworthy. My eye for detail can sometimes make me lose track 
                        of the bigger picture, but in a team setting both are important. Coming from a past 
                        with loads of customer service experience, I always aim to deliver more than what is 
                        expected of me. My long term goal is to start my own company to become an independent 
                        full stack developer. 
                        </p>
                        <Link to={`/contact`} className="reg-link">
                        <p className="secondary-font fw-400 mt-4">
                        Questions? Please get in touch!
                        </p>
                        </Link>
                    </div>
                </Col>
                <Col lg={6} md={12} className="mt-5 mb-lg-5 px-4">
                    <h2 className="primary-font fw-600 fs-2 content-heading-h2">Testimonials</h2>
                    <div className="intro-testimonials-container mt-4">
                        <blockquote className="secondary-font fw-400 mb-0">
                        &ldquo;Frode is a talented guy with a lot of drive. Since day 1 he showed great initiative,
                        and always had a senior level approach to his tasks. All in all, someone you can 
                        rely on delivering when needed&rdquo;
                        </blockquote>
                    </div>
                    <div className="d-flex justify-content-end">
                        <p className="secondary-font fw-700 mt-2 name-paragraph">Lars Nielsen, CSM at Betsson Group LTD</p>
                    </div>
                    <div className="intro-testimonials-container mt-4">
                    <blockquote className="secondary-font fw-400 mb-0">
                    &ldquo;He can always be counted on to deliver more than what is expected, and he uses
                    his knowlege to try to get the most out of every situation. He is not afraid to speak
                    his mind if he thinks something can be done in a better way, something I appreciate and
                    respects very much&rdquo;
                    </blockquote>
                    </div>
                    <div className="d-flex justify-content-end">
                        <p className="secondary-font fw-700 mt-2 name-paragraph">Petteri Spara, CSM at Betsson Group LTD</p>
                    </div>
                </Col>
              </Row>
          </Container>
      </section>
    </>
  );
}