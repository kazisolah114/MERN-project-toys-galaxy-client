import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Container from 'react-bootstrap/Container'

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <h2>Hello</h2>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;