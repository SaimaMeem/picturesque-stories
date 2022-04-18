import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import '../FAQ/FAQ.css'
const FAQ = () => {
    return (
        <Container className='my-4' id='faq'>
        <h2>Frequently Asked Questions 
        <br />(FAQs)</h2>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header className='pb-0'>Do you deliver every image you shoot?</Accordion.Header>
                    <Accordion.Body>
                    No, we do not. We eliminate duplicate images, test shots, missed focused shots, shots with bad expressions and other images that may dilute the overall product delivery. For example, candid laughs and emotional tears are some of the best images from the day. Unfortunately, they can also yield some unflattering facial expressions. We might snap a few extras of any of these moments to make sure we have a great shot with the ideal expression for the moment. With our expertise of processing millions of images each year, we may eliminate ones that we feel are duplicates and only deliver the best one.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                <Accordion.Header className='pb-0'>Have you shot at my venue before?</Accordion.Header>
                    <Accordion.Body>
                    We have shot at hundreds of venues, so there is a good chance that we have. However, if we have not, we will get to the venue early on the day of and be sure to perform a thorough walk-through to scout out the best photography locations. We also do extensive online research prior to your big day!
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header className='pb-0'> Do you provide partial day coverage?</Accordion.Header>
                    <Accordion.Body>
                    We typically do not provide partial day coverage on weekends. On weekends, we only accept clients that require at least 8 hours of coverage or have a budget of $3,900.00 and above.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                <Accordion.Header className='pb-0'>Do you shoot in JPEG, Small Raw, or Large Raw?</Accordion.Header>
                    <Accordion.Body>
                    We shoot most of our images in Small Raw with certain situations where we move to Large Raw. For our reasoning, please see this section on the Photography Misconceptions page of our website: Small Raw Vs. Large Raw.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
};

export default FAQ;