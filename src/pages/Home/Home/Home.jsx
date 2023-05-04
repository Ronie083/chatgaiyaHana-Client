import React from 'react';
import Banner from '../Banner/Banner';
import { Container } from 'react-bootstrap';
import ChefsCard from '../Chefscard/ChefsCard';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <Container className=''>
            <Banner></Banner>
            <ChefsCard></ChefsCard>
            <Outlet></Outlet>
        </Container>
    );
};

export default Home;