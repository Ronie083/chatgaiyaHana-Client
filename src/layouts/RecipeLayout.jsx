import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import Home from '../pages/Home/Home/Home';
import { Col, Container, Row } from 'react-bootstrap';
import RightContent from '../pages/Shared/Footer/RightContent/RightContent/RightContent';
import { Outlet } from 'react-router-dom';

const RecipeLayout = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={9}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightContent></RightContent>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default RecipeLayout;