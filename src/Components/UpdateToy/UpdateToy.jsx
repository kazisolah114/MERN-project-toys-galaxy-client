import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../../Layout/Header/Header';
import { Container } from 'react-bootstrap';

const UpdateToy = () => {
    const toy = useLoaderData()
    console.log(toy)
    return (
        <div>
            <Header></Header>
            <Container>
            <h2>update a toy</h2>
            </Container>
            
        </div>
    );
};

export default UpdateToy;