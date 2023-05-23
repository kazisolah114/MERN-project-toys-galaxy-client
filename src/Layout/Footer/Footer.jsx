import React from 'react';
import './Footer.css'
import { FaFacebookF, FaInstagram, FaTwitter, FaAngleRight } from "react-icons/fa";
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <div className='web-footer'>
                <Container>
                    <Row>
                        <Col>
                            <div className='footer-details'>
                                <div className='logo-section'>
                                    <img className='logo' src="https://static.vecteezy.com/system/resources/previews/013/923/543/original/blue-car-logo-png.png" alt="logo" />
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum itaque tempora reprehenderit ut aliquid quod nisi unde, quae praesentium labore.</p>
                                <div>
                                    <ul className='d-flex align-items-center gap-2 social-info'>
                                        <li><a href="#"><FaFacebookF></FaFacebookF></a></li>
                                        <li><a href="#"><FaInstagram></FaInstagram></a></li>
                                        <li><a href="#"><FaTwitter></FaTwitter></a></li>
                                    </ul>
                                </div>
                                
                            </div>
                        </Col>
                        <Col>
                            <div className="footer-links">
                                <h5>Link</h5>
                                <ul>
                                    <li><a href=""><FaAngleRight></FaAngleRight> About us</a></li>
                                    <li><a href=""><FaAngleRight></FaAngleRight> Services</a></li>
                                    <li><a href=""><FaAngleRight></FaAngleRight> Blog</a></li>
                                    <li><a href=""><FaAngleRight></FaAngleRight> Contact</a></li>
                                </ul>
                            </div></Col>
                        <Col>
                            <div className="newsletter">
                                <h5>Newsletter</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore ipsam repudiandae dolore necessitatibus soluta.</p>
                                <form action="">
                                    <div>
                                        <input type="email" placeholder="EMAIL" required />
                                        <input type="submit" value="SUBSCRIBE" className='primary-btn' />
                                    </div>
                                </form>
                            </div></Col>
                    </Row>
                </Container>




            </div>
            <div className="bottom-footer">
                <Container>
                <p>All Rights Reserved by - Toys Beast</p>
                </Container>
            </div>
        </div>
    );
};

export default Footer;