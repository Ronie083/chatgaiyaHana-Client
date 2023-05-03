import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import kalaBhuna from '../../../assets/Kala-bhuna-1.jpg'
import mejbani from '../../../assets/Mejbani-food.jpg'
import kacchi from '../../../assets/Kacchi-Biryani.jpg'


const Banner = () => {

    return (
        <Container>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src={kalaBhuna}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>Kala Bhuna</h5>
                        <p>Beef Kalo/Kala Bhuna is one of Chittagong most renowned beef dishes.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src={mejbani}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>Mezban</h5>
                        <p>Mezban is a Persian term that means to “host.” It refers to a Chittagong-based ritual known as “community feasting.”</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src={kacchi}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5>Kacchi Biryani</h5>
                        <p>
                            The name “Kacchi” means raw that indicates layering of the biryani components rather than cooking the meat or rice separately beforehand.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default Banner;