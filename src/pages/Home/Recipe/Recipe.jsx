import React from 'react';
import { Card, ListGroupItem } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import './Recipe.css'

const Recipe = () => {
    const chef = useLoaderData();
    const { recipes } = chef;
    return (
        <div>
            {recipes.map((recipe) => (
                <Card border="danger" style={{ width: '18rem' }} key={recipe.recipeId}>
                    <Card.Header>{recipe.recipeName}</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            {recipe.ingredients.map(ingredient => <li key={recipe.rating}>{ingredient}</li>)}
                        </Card.Text>
                        <Card.Text>
                            {recipe.cookingMethod.map(method => <li id='methodList' key={recipe.rating}>{method}</li>)}
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default Recipe;