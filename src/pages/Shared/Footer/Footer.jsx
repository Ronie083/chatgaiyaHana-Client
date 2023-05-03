import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import logo from '../../../assets/logo.png'
import './Footer.css'


const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center justify-content-center">
                    <Col md={4} className="text-center">
                        <img src={logo} alt="Logo" className="logo" />
                    </Col>
                    <Col md={4}>
                        <ul className="social-links text-center">
                            <li>
                                <a href="https://www.facebook.com">
                                    <FaFacebook />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.twitter.com">
                                    <FaTwitter />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com">
                                    <FaInstagram />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com">
                                    <FaYoutube />
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col className='text-center'>
                        <span>&#169; Chatgaiya Hana 2023, All Rights Reserved.</span>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;