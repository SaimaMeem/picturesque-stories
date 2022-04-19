import React, { useRef, useState } from 'react';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import auth from '../../firebase.init';
const Checkout = () => {
    const { serviceId } = useParams();
    const [user] = useAuthState(auth);
    const [validated, setValidated] = useState(false);
    const passwordRef = useRef('');
    const phoneRef = useRef('');
    const addressRef = useRef('');
    const commentsRef = useRef('');
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
        let password = passwordRef.current.value;
        let address = addressRef.current.value;
        let phone = phoneRef.current.value;
        // let comments = commentsRef.current.value;
        console.log(user);
        if (password && address && phone) {
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
        <Container className='my-5'>
            <h2>Booking Form for {serviceId}</h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit} className='py-3'>
                <Row className="mb-3">
                    <Form.Group as={Col} md="1" className='mx-auto'></Form.Group>
                    <Form.Group as={Col} md="5" className='mx-auto'>
                        <FloatingLabel
                            controlId="floatingName"
                            label="Username"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="name" value={user.displayName} readOnly />
                            <Form.Control.Feedback type="invalid">
                                Please provide your name.
                            </Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col} md="5" className='mx-auto'>
                        <FloatingLabel
                            controlId="floatingEmail"
                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control type="email" placeholder="name@example.com" value={user?.email} readonly />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid email address.
                            </Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col} md="1" className='mx-auto'></Form.Group>
                </Row>
                <Row className="mb-4">
                    <Form.Group as={Col} md="1" className='mx-auto'></Form.Group>
                    <Form.Group as={Col} md="5" className='mx-auto'>
                        <FloatingLabel controlId="floatingPhone" label="Phone" className="mb-3">
                            <Form.Control type="text" placeholder="Phone" ref={phoneRef} required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a phone number.
                            </Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col} md="5" className='mx-auto'>
                        <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                            <Form.Control type="password" placeholder="Password" ref={passwordRef} required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a password.
                            </Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col} md="1" className='mx-auto'></Form.Group>
                </Row>
                <Row className="mb-4">
                    <Form.Group as={Col} md="1" className='mx-auto'></Form.Group>
                    <Form.Group as={Col} md="5" className='mx-auto'>
                        <FloatingLabel controlId="floatingAddress" label="Address" className="mb-3">
                            <Form.Control as="textarea" placeholder="Address" style={{ height: '80px' }} ref={addressRef} required />
                            <Form.Control.Feedback type="invalid">
                                Please provide an address.
                            </Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col} md="5" className='mx-auto'>
                        <FloatingLabel controlId="floatingComments" label="Comments" className="mb-3">
                            <Form.Control as="textarea" placeholder="Comments" style={{ height: '80px' }} ref={commentsRef} />
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group as={Col} md="1" className='mx-auto'></Form.Group>
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