import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const Blogs = () => {
    return (
        <Container className='my-5'>
            <h2>Blogs</h2>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header className='pb-0'>Differences between authorization and authentication.</Accordion.Header>
                    <Accordion.Body>
                        Authentication is the act of validating that users are whom they claim to be. This is the first step in any security process. On the other hand, Authorization in system security is the process of giving the user permission to access a specific resource or function. This term is often used interchangeably with access control or client privilege. Simply put, authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header className='pb-0'>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                        Firebase Authentication aims to make building secure authentication systems easy, while improving the sign-in and onboarding experience for end users. It provides an end-to-end identity solution, supporting email and password accounts, phone auth, and Google, Twitter, Facebook, and GitHub login, and more. There are also a lot of alternatives of firebase. And they are: Parse, Back4App, AWS Amplify, Kuzzle and so on.
                        <br />
                        There are many ways of authentication. Authentication can be done through cards, retina scans, voice recognition, and fingerprints.

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header className='pb-0'> What other services does firebase provide other than authentication?</Accordion.Header>
                    <Accordion.Body>
                        Firebase is a full package that can help in developing mobile or web applications faster with fewer resources and more efficiency. There are many services which Firebase provides other then authentication, and they are: Cloud Firestore, Cloud Functions, Hosting, Cloud Storage, Google Analytics, Predictions, Cloud Messaging, Dynamic Links, Remote Config and so on.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
};

export default Blogs;