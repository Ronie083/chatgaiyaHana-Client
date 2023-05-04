import React from 'react';
import Banner from '../Banner/Banner';
import { Container } from 'react-bootstrap';
import ChefsCard from '../Chefscard/ChefsCard';

const Home = () => {
    return (
        <Container className=''>
            <Banner></Banner>
            <ChefsCard></ChefsCard>
        </Container>
    );
};

export default Home;