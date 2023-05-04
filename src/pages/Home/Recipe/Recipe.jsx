import React from 'react';
import { Card, ListGroupItem } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

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
                            {recipe.ingredients.map(ingredient => <ListGroupItem key={recipe.id}>{ingredient}</ListGroupItem>)}
                        </Card.Text>
                        <Card.Text>
                            {recipe.cookingMethod}
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default Recipe;