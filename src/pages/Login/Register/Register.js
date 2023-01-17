import React, { useRef, useState } from 'react';
import { Form, Row, Col, Button, Container, FloatingLabel, Spinner } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Socials from '../Socials/Socials';
import '../Register/Register.css';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
    const [validated, setValidated] = useState(false);
    const usernameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const location = useLocation();
    const navigate = useNavigate();
    const [agree, setAgree] = useState(false);
    let divElement;
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [sendEmailVerification, sending, errorEmailVerification] = useSendEmailVerification(auth);
    if (error) {
        divElement = <p className='text-danger'>Error: {error?.message}</p>;
    }
    if (loading) {
        divElement = <Spinner animation="border" role="status" variant="warning">
            <span className="visually-hidden">Loading...</span>
        </Spinner>;
    }
    const navigateLogin = event => {
        navigate('/login');
    }
    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        event.preventDefault();
        const username = usernameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // console.log(email, password);
        await createUserWithEmailAndPassword(email, password);
        if (!error) {
            await updateProfile({ displayName: username });
            await sendEmailVerification();
            // console.log('Updated profile');
            navigate('/home');
        }
    };
    return (
        <Container className='mt-4 mb-5'>
            <h2>Register</h2>
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
                        <FloatingLabel controlId="floatingPassword" label="Password">
                            <Form.Control type="password" placeholder="Password" ref={passwordRef} required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a password.
                            </Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>
                </Row>
                <Row className="mt-4">
                    <Form.Group className="d-flex justify-content-center" controlId="formBasicCheckbox" >
                        <Form.Check className={agree ? 'text-success fw-bold' : 'text-muted'} onClick={() => setAgree(!agree)} type="checkbox" label="Accept Terms and Conditions" required />
                    </Form.Group>
                </Row>
                <Form.Group className="text-center">
                    <div className='mb-3'>
                        {divElement}
                    </div>
                    <Button type="submit" className='text-center my-3 mx-auto btn-card w-25 text-uppercase' disabled={!agree}>Register</Button>
                    <p className='mb-3 para'>Already have an account? &nbsp;&nbsp;<Link to="/login" className='text-warning text-decoration-none text-uppercase fw-bold' onClick={navigateLogin} >Login</Link></p>
                </Form.Group>
            </Form>
            <div className="or"> OR </div>
            <Socials></Socials>
            <ToastContainer />
        </Container>
    );
};

export default Register;