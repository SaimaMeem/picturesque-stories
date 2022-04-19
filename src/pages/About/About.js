import React from 'react';
import { Container } from 'react-bootstrap';
import '../About/About.css'
const About = () => {
    return (
        <Container className='my-5 mx-auto pb-5 about w-50'>
          <h2>About Me</h2>
          <p className='about-me'>My name is Saima Sultana. I have completed my Bsc in Computer Science and Engineering in 2021. Currently, I am working as a ERPNext Fullstack Engineer in Altersense Limited. 
          <br/>
          Since last year, I have been highly fascinated with React and have been wanting to learn React, as I enjoy Front-End Development more than Back-End Development. Through this course of Programming Hero, I believe I have learnt quite a lot about development in general. I feel tremendous confidence in me. In the next few months, I will try to increase my knowledge of React. In future, I wish to work as an React Developer.</p>
        </Container>
    );
};

export default About;