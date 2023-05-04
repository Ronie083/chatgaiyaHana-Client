import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import './Header.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { } from "react-icons/fc";
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {

    const { user } = useContext(AuthContext);


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
                                <NavLink to="/" activeclassname="active">Home</NavLink>
                                <NavLink to="/blog" activeclassname="active">Blog</NavLink>
                            </Nav>
                            <Nav>
                                {user &&
                                    <FaUserCircle
                                        style={{ fontSize: '2rem', marginRight: '10px'}}></FaUserCircle>
                                }
                                {user ?
                                    <Button variant="dark">LogOut</Button> :
                                    <Link to="/login">
                                        <Button variant="dark">Login</Button>
                                    </Link>
                                }
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </Container>

    );
};

export default Header;