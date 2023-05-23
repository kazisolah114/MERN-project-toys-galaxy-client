import React from 'react';
import './Banner.css'
import { Container } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className='banner-section'>
            <Container>
                <div className='w-50 banner-content'>
                <h2><span>World's</span> Leading Retailer of <span>Remote Control</span> Devices</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium blanditiis, quae est, reiciendis vero consequatur nam quidem voluptatem excepturi amet modi id saepe perferendis culpa</p>
                <div className='banner-search mt-5'>
                    <input type="text" placeholder='Search your toy' />
                    <input type="submit" value="Find Your Toys" className='search-btn'/>
                </div>
                </div>
            </Container>
        </div>
    );
};

export default Banner;