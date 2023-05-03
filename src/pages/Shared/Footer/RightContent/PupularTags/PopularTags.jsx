import React from 'react';
import { Button } from 'react-bootstrap';

const PopularTags = () => {
    return (
        <div>
            <h1>Popular Tags</h1>
            <hr />
            <Button className='m-1' variant="danger" href="#">Beef</Button>
            <Button className='m-1' variant="danger" href="#">Biryani</Button>
            <Button className='m-1' variant="danger" href="#">Mejban</Button>
            <Button className='m-1' variant="danger" href="#">Shutki</Button>
            <Button className='m-1' variant="danger" href="#">Bhorta</Button>
            <Button className='m-1' variant="danger" href="#">Dinner</Button>
            <Button className='m-1' variant="danger" href="#">Breakfast</Button>
            <Button className='m-1' variant="danger" href="#">Lunch</Button>
        </div>
    );
};

export default PopularTags;