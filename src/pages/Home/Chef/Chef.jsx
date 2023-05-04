import React from 'react';
import { Card, Container, ListGroup } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';
import './Chef.css'
import { FcCalendar, FcLike, FcReading } from "react-icons/fc";
import Recipe from '../Recipe/Recipe';


const Chef = () => {
    const { id } = useParams();
    const chef = useLoaderData();
    const { chefName, chefPicture, chefDetails, yearsOfExperience, numRecipes, likes, recipes } = chef;
    return (
        <Container className='mt-5'>
            <div>
                <Card>
                    <Card.Header className='d-flex'>
                        <div className='flex-grow-1'>
                            <span className='m-2'><FcLike></FcLike> {likes} Likes</span>
                            <span className='m-2'><FcCalendar></FcCalendar> {yearsOfExperience} Years of Experience</span>
                            <span className='m-2'><FcReading></FcReading> {numRecipes} number of recipes available.</span>
                        </div>
                    </Card.Header>
                    <Card.Img id='chefCardImg' variant="top" src={chefPicture} />
                    <Card.Body>
                        <Card.Title>{chefName}</Card.Title>
                        <Card.Text>
                            {chefDetails}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                        <h4>Chef&apos;s suggested</h4>
                        <div>
                            <ListGroup className="list-group-flush">
                                {
                                    recipes.map(recipe => <ListGroup.Item key={id}>{recipe.recipeName}</ListGroup.Item> )
                                }
                            </ListGroup>
                        </div>
                    </Card.Footer>
                </Card>
            </div>
            <div className='my-5 '>
                <Recipe></Recipe>
            </div>
        </Container>
    );
};

export default Chef;