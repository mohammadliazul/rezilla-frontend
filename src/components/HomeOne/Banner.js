import React from 'react';
import mobileImg from '../../assets/images/HomeOne/Banner/mobile.png';
import bigImg from '../../assets/images/HomeOne/Banner/Dashboard.png';

const Banner = () => {
    return (
         <>
            <section className='hero-banner-wrapper d-flex flex-wrap align-content-center'>
                <div className="container">
                    <div className="row">
                        <div className="hero-welcome-text col-lg-6 col-md-12 col-12 d-flex flex-wrap align-content-center">
                            <h2 className="">Make Your Sass And Awesome Design</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking</p>
                            <div className="button-wrapper">
                                <a href='/#' className="theme-button me-4">Contact Us</a>
                                <a href='/#' className="theme-button button-black">Get Start</a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="hero-image">
                                <div className="hero-img-inner">
                                    <img className="hero-small-img" src={mobileImg} alt="mobile img" />
                                    <img className="hero-big-img" src={bigImg} alt="dashboard img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
};

export default Banner;