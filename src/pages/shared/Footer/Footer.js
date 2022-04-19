import React from 'react';
import '../Footer/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGoogle, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
const Footer = () => {
    let year= new Date().getFullYear();
    return (
        <div>
            <footer className="bg-footer text-white py-4 mt-5">
                <div className="container">
                    <div className="row d-flex px-2 py-5">
                        <div className="col-lg-3 col-md-6 order-lg-1 col-12 px-3 pt-3 pb-2 d-flex flex-column align-items-md-center align-items-center">
                            <h2 className="">Contact</h2>
                            <div>
                                <p><FontAwesomeIcon icon={faHome}></FontAwesomeIcon> New York, USA</p>
                                <p><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> ps@gmail.com</p>
                                <p><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>  + 09 234 567 88</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-12 order-lg-3 pt-3 pb-3 px-3 d-flex flex-column align-items-md-center align-items-center">
                            <h2 className=" ">Menu</h2>
                            <div className="d-flex flex-column gap-2 text-center">
                                <Link to="/home" className='text-decoration-none  text-white'>Home</Link>
                                <Link to="/home#services"  className='text-decoration-none  text-white'>Services</Link>
                                <Link to="/home#faq"  className='text-decoration-none  text-white'>FAQs</Link>
                                <Link to="/blogs"  className='text-decoration-none  text-white'>Blogs</Link>
                                <Link to="/about"  className='text-decoration-none  text-white'>About</Link>

                                {/* <Nav.Link to="/home">Home</Nav.Link>
                            <Nav.Link to="#services">Services</Nav.Link>
                            <Nav.Link to="/about">About</Nav.Link> */}
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 order-lg-2 col-12 px-3 pt-3 pb-2">
                            <div className="text-center">
                                <h2> Picturesque Stories</h2>
                                <p> Copyright &copy; {year} Picturesque Stories</p>
                                <p> All Rights Reserved</p>
                            </div>
                            <div className="text-center mb-4">
                                <a className="btn btn-outline-light rounded-3 m-1" href="#!" role="button"><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon> </a>
                                <a className="btn btn-outline-light rounded-3 m-1" href="#!" role="button"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
                                <a className="btn btn-outline-light rounded-3 m-1" href="#!" role="button"><FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon></a>
                                <a className="btn btn-outline-light rounded-3 m-1" href="#!" role="button"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;