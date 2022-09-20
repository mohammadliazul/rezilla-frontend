import React from 'react';
import frontImg from '../../assets/images/HomeOne/About/about-front-img.png';
import backImg from '../../assets/images/HomeOne/About/about-back-img.png';
// import {HiCheck}from 'react-icons/hi';

const About = () => {
    return (
        <>
            <section className='about-wrapper d-flex flex-wrap align-content-center'>
              <div className='container'>
                <div className='row'>
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="about-image">
                            <div className="about-inner">
                                <img className="about-front-img" src={frontImg} alt="rezilla react template" />
                                <img className="about-back-img" src={backImg} alt="rezilla react template" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                        <h6 className="theme-h6">Progress & Customizations</h6>
                        <h3 className="theme-h3">Discover & growth with analysis</h3>
                        <p>There are many variations of passages of Lorem a Ipsum available as majority have suffered alteration in some our form, by injected humo randomised words which don't look even slightly believable.</p>
                        <ul className='info-list'>
                            <li>Appplication design</li>
                            <li>Web & app development</li>
                            <li>Marketing research & analysis</li>
                        </ul>
                        <button className='theme-button'>Read More</button>
                    </div>
                </div>
              </div>
            </section>
        </>
    );
};

export default About;