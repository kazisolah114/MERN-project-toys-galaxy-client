import React, { useEffect } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Header from '../../Layout/Header/Header';
import { Container } from 'react-bootstrap';
import './ToyDetails.css'
import Rating from 'react-rating';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const ToyDetails = () => {
    const toy = useLoaderData();
    // console.log(toy)

    return (
        <div>
            <Header></Header>
            <Container>
                <div className="toy-details d-flex align-items-center gap-5 shadow p-4 my-5 rounded-1">
                    <div className="toy-image">
                        <img className='w-75' src={toy.imgURL} alt="" />
                    </div>
                    <div className="toy-info">
                        <h5>{toy.name}</h5>
                        <p><span>Seller:</span> {toy.sellerName}</p>
                        <p><span>Seller email:</span> {toy.email}</p>
                        <p><span>Price:</span> ${toy.price}</p>
                        <Rating className="react-rating"
                            placeholderRating={toy.rating}
                            emptySymbol={<FaStarHalfAlt></FaStarHalfAlt>}
                            placeholderSymbol={<FaStar></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                            readonly
                        />
                        <p><span>Quantity:</span> {toy.quantity}</p>
                        <p><span>About:</span>
                            <br />
                            {toy.description}</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ToyDetails;