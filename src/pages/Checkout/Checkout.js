import React, { useRef, useState } from 'react';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
const Checkout = () => {
    const { serviceId } = useParams();
    const [validated, setValidated] = useState(false);
    const usernameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const phoneRef = useRef('');
    const addressRef = useRef('');
    // const navigate = useNavigate();
    // let divElement;
    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        event.preventDefault();
        let username = usernameRef.current.value;
        let email = emailRef.current.value;
        let password = passwordRef.current.value;
        let address = addressRef.current.value;
        let phone = phoneRef.current.value;
        console.log(email, password);
        if (username && email && password && address && phone) {
            toast.info('Thank you for your Booking!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            // navigate('/home');
        }
    };
    return (
        <Container className='mt-4 mb-5'>
            <h2>Booking Form for {serviceId}</h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" className='mx-auto'>
                        <FloatingLabel
                            controlId="floatingName"
                            label="Username"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="name" ref={usernameRef} required />
                            <Form.Control.Feedback type="invalid">
                                Please provide your name.
                            </Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" className='mx-auto'>
                        <FloatingLabel
                            controlId="floatingEmail"
                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control type="email" placeholder="name@example.com" ref={emailRef} required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid email address.
                            </Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>
                </Row>
                <Row className="mb-4">
                    <Form.Group as={Col} md="4" className='mx-auto'>
                        <FloatingLabel controlId="floatingPhone" label="Phone">
                            <Form.Control type="text" placeholder="Phone" ref={phoneRef} required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a phone number.
                            </Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>
                </Row>
                <Row className="mb-4">
                    <Form.Group as={Col} md="4" className='mx-auto'>
                        <FloatingLabel controlId="floatingAddress" label="Address">
                            <Form.Control type="text" placeholder="Address" ref={addressRef} required />
                            <Form.Control.Feedback type="invalid">
                                Please provide an address.
                            </Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>
                </Row>
                <Row className="mb-4">
                    <Form.Group as={Col} md="4" className='mx-auto'>
                        <FloatingLabel controlId="floatingPassword" label="Password">
                            <Form.Control type="password" placeholder="Password" ref={passwordRef} required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a password.
                            </Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>
                </Row>
                <Form.Group className="text-center">
                    {/* <div className='mb-3'>
                    {divElement}
                </div> */}
                    <Button type="submit" className='text-center my-3 mx-auto btn-card w-25 text-uppercase' >Submit</Button>
                </Form.Group>
            </Form>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </Container>
    );
};

export default Checkout;