import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../Header/Header.css";
// import logo from '../../../images/48.svg';
const Header = () => {
    return (
        <div>
            <Navbar className="navbar py-3" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/' className='d-flex justify-content-between align-items-center'>
                        {/* <img src={logo} className="d-inline-block align-top logo" alt="picturesque stories logo" /> */}
                        <span className='title ps-2'>Picturesque Stories</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        {/* <Nav className="me-auto">

                        </Nav> */}
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/home" className="links">Home</Nav.Link>
                            <Nav.Link as={Link} to="#services" className="links">Services</Nav.Link>
                            <Nav.Link as={Link} to="/blogs" className="links">Blogs</Nav.Link>
                            <Nav.Link as={Link} to="/about" className="links">About</Nav.Link>
                            <Nav.Link as={Link} to="/login" className="links">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;