import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Helpline from './Helpline/Helpline';
import Homevideo from './HomeVideo/Homevideo';
import LoadLatestApartment from './LoadLatestApartment/LoadLatestApartment';
import Review from './Review/Review';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <LoadLatestApartment></LoadLatestApartment>
            <Homevideo></Homevideo>
            <Helpline></Helpline>
            <Review></Review>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;