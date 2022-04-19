import React, { useRef, useState } from 'react';
import { Form, Row, Col, Button, Container, FloatingLabel, Spinner } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import '../Login/Login.css'
import Socials from '../Socials/Socials';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const [validated, setValidated] = useState(false);
    const [signInWithEmailAndPassword, emailUser, emailLoading, emailError] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const location = useLocation();
    const navigate = useNavigate();
    let from = location?.state?.from?.pathname || "/";

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
        if (email && password) {
            signInWithEmailAndPassword(email, password);
        }
    };
    let divElement;
    if (emailError) {
        divElement = <p className='text-danger'>Error: {emailError?.message}</p>;
    }
    if (emailLoading) {
        divElement = <Spinner animation="border" role="status" variant="warning">
            <span className="visually-hidden">Loading...</span>
        </Spinner>;
    }
    if (emailUser) {
        navigate('/home');
        console.log(emailUser);
    }
    // if (user) {
    //     navigate(from, { replace: true });
    // }
    const navigateRegister = event => {
        navigate('/register');
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success('Sent email', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
        else {
            toast.error("Please enter your email address!",{position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        }
    }

    return (
        <Container className='mt-4 mb-5'>
            <h2>Login</h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
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
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" className='mx-auto'>
                        <FloatingLabel controlId="floatingPassword" label="Password">
                            <Form.Control type="password" placeholder="Password" ref={passwordRef} required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a password.
                            </Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3 text-center">
                    <div className='mb-3'>
                        {divElement}
                    </div>
                    <Button type="submit" className='text-center my-3 mx-auto btn-card w-25 text-uppercase'>Login</Button>
                    <p className='mb-1'>Forget Password?<Button className='text-warning text-decoration-none text-uppercase fw-bold' variant='link' onClick={resetPassword}>Reset Password</Button></p>
                    <p className='mb-3'>Don't have an account? &nbsp;&nbsp;<Link to="/register" className='text-warning text-decoration-none text-uppercase fw-bold' onClick={navigateRegister} >Register</Link></p>
                </Form.Group>
            </Form>
            <div className="or"> OR </div>
            <Socials></Socials>
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

export default Login;