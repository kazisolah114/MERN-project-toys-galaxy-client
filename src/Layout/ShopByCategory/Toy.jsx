import React from 'react';
import { Button } from 'react-bootstrap';
import './Toy.css'
import Rating from 'react-rating';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Toy = ({ toy }) => {
    // console.log(toy)
    const { name, imgURL, price, quantity, sellerName, rating, description, category, _id } = toy;
    // console.log(rating)
    return (
        <div className="single-toy p-4 d-flex gap-4 align-items-center justify-content-between">
            <img className='' style={{ width: "200px" }} src={imgURL} alt="" />
            <div className='toy-info'>
                <h5>{name}</h5>
                <p>Price: ${price}</p>
                <Rating className="react-rating"
                    placeholderRating={rating}
                    emptySymbol={<FaStarHalfAlt></FaStarHalfAlt>}
                    placeholderSymbol={<FaStar></FaStar>}
                    fullSymbol={<FaStar></FaStar>}
                    readonly
                />
                <Link to={`/alltoys/${_id}`} className='toy-btn header-btn'>View Details</Link>
            </div>
        </div>
    );
};

export default Toy;