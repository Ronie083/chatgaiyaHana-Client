import React from 'react';
import logo from '../../../assets/logo.png'
import './Header.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Container className='text-center'>
            <img className='w-5 h-10' src={logo} alt="" />
            <div>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Container>
                        <Navbar.Brand className='fw-bold' href="#home">Chatgaiya Hana</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <NavLink to="/" activeClassName="active">Home</NavLink>
                                <NavLink to="/blog" activeClassName="active">Blog</NavLink>
                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets">More deets</Nav.Link>
                                <Nav.Link eventKey={2} href="#memes">
                                    <Button variant="dark">Login</Button>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </Container>

    );
};

export default Header;