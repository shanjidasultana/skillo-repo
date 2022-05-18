import React from 'react';
import Banner from '../components/Home/Banner';
import Footer from '../components/Home/Footer';
import Header from '../components/Home/Header';
import Services from '../components/Home/Services';

const Home = () => {
    return (
        <div style={{background:"#e6df93"}}>
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;
