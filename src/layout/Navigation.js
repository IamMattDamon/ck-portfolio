import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logo from "./../icons/namelogo.png";

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
                    <Nav className="mr-auto">
                        <NavLink to="/" exact className="nav-link">
                            Home
                        </NavLink>
                        <NavLink to="/projects" exact className="nav-link">
                            Projects
                        </NavLink>
                        <NavLink to="/contact" exact className="nav-link">
                            Contact
                        </NavLink>             
                    </Nav>
                    <Nav className="mr-auto navbar-icons ms-auto">
                        <ul className="navbar-nav">
                            <li className="nav-item d-none d-lg-block">
                                <a className="nav-icon text-decoration-none" href="https://github.com/IamMattDamon/FrodeKarlsen" target="_blank">
                                    <img src="icons/github.png" alt="GitHub link icon" />
                                    <span class="nav-icon-span">Github</span>
                                </a>
                            </li>
                            <li className="nav-item d-none d-lg-block mx-4">
                                <a className="nav-icon">
                                    <img src="icons/email.png" alt="email icon" />
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