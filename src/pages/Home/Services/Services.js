import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Container, Row, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../Services/Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    const navigate = useNavigate();
    const navigateToCheckout = (name) => {
        navigate(`/service/${name}`)
    }
    return (
        <Container className='my-4' id='services'>
            <h2>Services</h2>
            <Row xs={1} md={2} className="g-4">
                {services.map((service, idx) => (
                    <CardGroup key={service.id}>
                        <Card className='shadow'>
                            <div className='row justify-content-center align-items-center'>
                                <div className='col-lg-7'>
                                    <Card.Img variant="top" src={service.img} />
                                </div>
                                <div className='col-lg-5 text-center'>
                                    <Card.Body className='h-100 pb-0'>
                                        <Card.Title className='pb-2'>{service.name}</Card.Title>
                                        <Card.Subtitle className="mb-2 pb-2 text-muted">{service.price}</Card.Subtitle>
                                        <Button className='btn-card' onClick={
                                            () => navigateToCheckout(service.name)}>Book Now</Button>
                                    </Card.Body>
                                </div>
                            </div>
                            <Card.Body className='pt-2'>
                                <Card.Text>
                                    {service.description}
                                </Card.Text>
                            </Card.Body>
                            {/* <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer> */}
                        </Card>
                    </CardGroup>
                ))}
            </Row>
        </Container>
    );
};

export default Services;