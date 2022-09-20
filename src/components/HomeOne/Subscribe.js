import React from 'react';
import SubscribeFormBtn from '../Helper/SubscribeFormBtn';

const Subscribe = () => {
    return (
        <>
            <section className="subscribe-section-wrapper py-80">
                <div className="subscribe-section-inner">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6 col-xl-7">
                                <h3 className='theme-h3 text-white'>Sign up for latest Sass resources news from Restly</h3>
                            </div>
                            <div className="col-12 col-md-6 col-xl-5">
                                <SubscribeFormBtn/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Subscribe;