import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import './Blog.css'
import Header from '../../Layout/Header/Header';

const Blog = () => {
    return (
        <div>
            <Header></Header>
            <Container className='py-5'>
            
            <Row>
                <Col><Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What is an access token and refresh token? How do they work and where should we store them on the client-side?</Accordion.Header>
                        <Accordion.Body>
                        Access token and refresh token shouldn't be stored in the local/session storage, because they are not a place for any sensitive data. Hence I would store the access token in a httpOnly cookie even though there is CSRF and I need it for most of my requests to the Resource Server anyway.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Compare SQL and NoSQL databases?</Accordion.Header>
                        <Accordion.Body>
                        SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>What is express js? What is Nest JS (google it)?</Accordion.Header>
                        <Accordion.Body>
                        NestJS provides a more structured and opinionated approach, which can make it easier to build complex APIs with proper separation of concerns. Express, on the other hand, is more lightweight and flexible, which makes it a popular choice for simple or small-scale APIs.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>What is MongoDB aggregate and how does it work (google it)?</Accordion.Header>
                        <Accordion.Body>
                        How does aggregate work in MongoDB?
MongoDB Aggregation: tutorial with examples and exercises ...
What is Aggregation in MongoDB? Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion></Col>
                <Col>
                    <img className='w-100' src="https://static.vecteezy.com/system/resources/previews/010/888/120/non_2x/person-man-asked-question-mark-concept-illustration-people-business-cartoon-character-businessman-answer-help-confusion-problem-support-faq-frequently-choice-office-thinking-background-vector.jpg" alt="" />
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default Blog;