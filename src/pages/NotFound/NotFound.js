import React from 'react';
import { Button, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image from '../../images/notfound.png';
import './NotFound.css';
const NotFound = () => {
    return (
        <Container>
            <div className='d-flex row justify-content-center'>
            <Image className='w-auto not-found-image' src={image} fluid></Image>
            <div className='text-center'>
            <h5>Sorry! The page you are looking for is nowhere to find. </h5>
            <Button className='go-home-btn mt-5'><Link to="/">Go to Home</Link></Button>
            </div>
            </div>
        </Container>
    );
};

export default NotFound;