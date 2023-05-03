import React from 'react';
import { Button } from 'react-bootstrap';
import { FaBeer, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Follow = () => {
    return (
        <div>
            <h1>Follow Us</h1>
            <hr />
            <Button className='w-100 mb-2' variant="outline-primary"> <FaFacebook /> Facebook</Button>
            <Button className='w-100 mb-2' variant="outline-info"> <FaTwitter /> Twitter</Button>
            <Button className='w-100 mb-2' variant="outline-warning"> <FaInstagram /> Instagram</Button>
            <Button className='w-100 mb-5' variant="outline-danger"> <FaYoutube /> Youtube</Button>
        </div>
    );
};

export default Follow;