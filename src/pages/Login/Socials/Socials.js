import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import '../Socials/Socials.css';
import google from '../../../images/socials/google-logo.png'
import { useSignInWithGoogle, useSignInWithFacebook } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
const Socials = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);
    const location = useLocation();
    const navigate = useNavigate();
    let divElement;
    let from = location?.state?.from?.pathname || "/";
    if (googleError || facebookError) {
        divElement = <p className='text-danger'>Error: {googleError?.message} {facebookError?.message}</p>;
    }
    if (googleLoading || facebookLoading) {
        divElement = <Spinner animation="border" role="status" variant="warning">
            <span className="visually-hidden">Loading...</span>
        </Spinner>;
    }
    if (googleUser || facebookUser) {
        // navigate('/home');
        navigate(from, { replace: true });
        console.log(googleUser || facebookUser);
    }
    return (
        <div className='text-center'>
            <div className='mb-5'>
                {divElement}
            </div>
            <Button type="submit" className='d-block text-center mt-3 mx-auto btn-social btn-google w-25 text-uppercase' onClick={() => signInWithGoogle()}><img className='mx-2' style={{ width: '20px' }} src={google} alt='' />Continue with Google</Button>
            <Button type="submit" className='text-center mt-3 mx-auto btn-social btn-facebook w-25 text-uppercase' onClick={() => signInWithFacebook()}> <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon> &nbsp;&nbsp;Continue with Facebook</Button>
        </div>

    );
};

export default Socials;