import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './ChefsCard.css'
import { Link } from 'react-router-dom';
import { FcCalendar, FcLike, FcReading } from "react-icons/fc";

const ChefsCard = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <Container>
            <h1 className='text-center my-5'>Our Chefs</h1>
            <div>
                <Row xs={1} md={2} className="g-4 mb-5">
                    {chefs.map(chef => (
                        <Col key={chef.id}>
                            <Card>
                                {/* <Card.Img variant="top" src={chef.chefPicture} /> */}
                                <img id='cardImg' src={chef.chefPicture} alt="" />
                                <Card.Body>
                                    <Card.Title>{chef.chefName}</Card.Title>
                                    <Card.Text>
                                        <FcLike></FcLike> {chef.likes} Likes
                                        <br />
                                        <FcCalendar></FcCalendar> {chef.yearsOfExperience} Years of Experience
                                        <br />
                                        <FcReading></FcReading> {chef.numRecipes} number of recipes available.
                                    </Card.Text>
                                    <Card.Footer>
                                        <Link to={`/chefs/${chef.id}`} id='cardLink'>View Recipes</Link>
                                    </Card.Footer>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </Container>
    );
};

export default ChefsCard;