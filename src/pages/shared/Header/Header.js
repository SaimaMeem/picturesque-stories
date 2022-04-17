import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import "../Header/Header.css";
import logo from '../../../images/48.svg';
const Header = () => {
    return (
        <div>
            <Navbar className="navbar py-3" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" className='d-flex justify-content-between align-items-center'>
                        {/* <img src={logo} className="d-inline-block align-top logo" alt="picturesque stories logo" /> */}
                         <span className='title ps-2'>Picturesque Stories</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        {/* <Nav className="me-auto">

                        </Nav> */}
                        <Nav className="ms-auto">
                            <Nav.Link to="/home">Home</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;