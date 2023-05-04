import React from 'react';
import { Card, Col, Container, Row, Toast } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import './Recipe.css'
import { FcBookmark, FcComboChart } from "react-icons/fc";
import { toast } from 'react-toastify';


const Recipe = () => {
    const chef = useLoaderData();
    const { recipes } = chef;
    const handleBookmarkClick = () => {
        toast.success('Recipe bookmarked!');
    };

    return (
        <Container>
            <Row>
                {recipes.map((recipe) => (
                    <Col key={recipe.recipeId}>
                        <Card border="danger" style={{ width: '20rem' }}>
                            <Card.Header className='d-flex'>
                                <div className='flex-grow-1'>
                                    {recipe.recipeName}
                                </div>
                                <div>
                                    <FcComboChart></FcComboChart>{recipe.rating}
                                    <button id='bookmark' onClick={handleBookmarkClick}> <FcBookmark></FcBookmark> </button>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    {recipe.ingredients.map(ingredient => <li key={recipe.rating}>{ingredient}</li>)}
                                </Card.Text>
                                <Card.Text>
                                    {recipe.cookingMethod.map(method => <li id='methodList' key={recipe.rating}>{method}</li>)}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Recipe;