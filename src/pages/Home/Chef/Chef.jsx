import React from 'react';
import { useParams } from 'react-router-dom';

const Chef = () => {
    const {id} = useParams();
    return (
        <div>
            <h1>Chefs details here: {id}</h1>
        </div>
    );
};

export default Chef;