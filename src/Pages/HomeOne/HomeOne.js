import React from 'react';
import Header from '../../components/HomeOne/Header';
import Banner from '../../components/HomeOne/Banner';
import ClientSection from '../../components/HomeOne/ClientSection';
import About from '../../components/HomeOne/About';
import CounterSection from '../../components/HomeOne/CounterSection';
import FAQ from '../../components/HomeOne/FAQ';
import Services from '../../components/HomeOne/Services/Services';
import Testimonial from '../../components/HomeOne/Testimonial/Testimonial';
import Software from '../../components/HomeOne/Software';
import Blog from '../../components/HomeOne/Blog/Blog';
import Subscribe from '../../components/HomeOne/Subscribe';
import Footer from '../../components/HomeOne/Footer';


const HomeOne = () => {
    return (
        <>
            <Header/>
            <Banner/>
            <ClientSection/>
            <About/>
            <CounterSection/>
            <Services />
            <FAQ videoId="3qyhgV0Zew0"/>
            <Testimonial/>
            <Software/>
            <Blog/>
            <Subscribe/>
            <Footer/>
        </>
    );
};

export default HomeOne;