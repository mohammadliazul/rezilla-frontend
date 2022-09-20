import React from 'react';
import dashboard from '../../assets/images/HomeOne/Software/dashboard.png';
const Software = () => {
    return (
        <>
            <section className="software-section-wrapper">
                <div className="software-section-inner py-60">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-6 d-flex flex-wrap align-items-center">
                            <div className="software-content-wrapper ">
                                <div className="software-content-inner">
                                    <h6 className="theme-h6 text-white">Get The Software</h6>
                                    <h3 className="theme-h3 text-white">Try Our Software</h3>
                                    <p className='text-white pt-25 pb-50 pr-50'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or as randomised words which don't look even slightly believable. If you are go to use a passage of Lorem Ipsum.</p>
                                    <div className="software-content-btn-wrapper">
                                       <div className='software-content-btn-inner'>
                                            <a className='theme-button me-4 button-white' href="/#">
                                                <i className="bi bi-android2 me-1"></i>Google Store
                                            </a>
                                            <a className='theme-button button-black' href="/#">
                                                <i className="bi bi-apple me-1"></i> Apple Store
                                            </a>
                                       </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-6">
                            <div className="software-img-wrapper">
                                <div className="software-img-inner">
                                    <img src={dashboard} alt="rezilla react theme" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    );
};

export default Software;