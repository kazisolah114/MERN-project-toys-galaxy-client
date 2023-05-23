import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Container from 'react-bootstrap/Container'
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import Learnmore from '../../Learnmore/Learnmore';
import Sponsors from '../../Components/Sponsors/Sponsors';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Container>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <Learnmore></Learnmore>
            <Sponsors></Sponsors>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;