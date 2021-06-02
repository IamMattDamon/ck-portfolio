import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logo from "./../icons/namelogo.png";
import gitIcon from "./../icons/github.png";
import emailIcon from "./../icons/email-new.png";

export default function Navigation() {
    return (
        <>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand>
                    <img src={logo} alt="name logo" className="nav-logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto navbar-links">
                        <NavLink to="/" exact className="nav-link" activeClassName="active">
                            &lt;Home&#47;&gt;
                        </NavLink>
                        <NavLink to="/projects" exact className="nav-link" activeClassName="active">
                            &lt;Projects&#47;&gt;
                        </NavLink>
                        <NavLink to="/contact" exact className="nav-link" activeClassName="active">
                            &lt;Contact&#47;&gt;
                        </NavLink>             
                    </Nav>
                    <Nav className="mr-auto navbar-icons ms-auto">
                        <ul className="navbar-nav">
                            <li className="nav-item d-none d-lg-block">
                                <a className="nav-icon text-decoration-none" href="https://github.com/IamMattDamon/FrodeKarlsen" target="_blank" rel="noreferrer">
                                    <img src={gitIcon} alt="GitHub link icon" />
                                    <span className="nav-icon-span">Github</span>
                                </a>
                            </li>
                            <li className="nav-item d-none d-lg-block mx-4">
                                <a className="nav-icon text-decoration-none" href="#.">
                                    <img src={emailIcon} alt="email icon" className="email-icon"/>
                                    <span className="nav-icon-span">Email</span>
                                </a>
                            </li>
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
}