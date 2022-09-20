import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import img from '../../assets/images/HomeOne/FAQ/Dashboard.png';
import Accordion from '../Helper/Accordion';

const FAQ = (props) => {
    const {videoId} = props;
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <section className='faq-wrapper py-120'>
                <ModalVideo channel="youtube" autoplay isOpen={isOpen} videoId={videoId} onClose={() => setOpen(false)} />
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                            <div className='section-title-area pb-50'>
                                <h6 className="theme-h6">Popular Questions</h6>
                                <h3 className="theme-h3">Frequently Asked Questions</h3>
                            </div>
                            <Accordion
                                accordionTitleOne="How to contact with customer Services?"
                                accordionInfoOne="There are many variations of passages of Lorem Ipisuxm available a red alteration in some form, by injected humour, or randomisds our slightly believable."
                                accordionTitleTwo="How delete my account?"
                                accordionInfoTwo="There are many variations of passages of Lorem Ipisuxm available a red alteration in some form, by injected humour, or randomisds our slightly believable."
                                accordionTitleThree="Where is the edit option on dashboard?"
                                accordionInfoThree="There are many variations of passages of Lorem Ipisuxm available a red alteration in some form, by injected humour, or randomisds our slightly believable."
                                accordionTitleFour="Where is the edit option on dashboard?"
                                accordionInfoFour="There are many variations of passages of Lorem Ipisuxm available a red alteration in some form, by injected humour, or randomisds our slightly believable."
                            />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                            <div className='faq-thumbnail'>
                                <img className='w-100' src={img} alt="" />
                                <button className='video-play-btn border-0' onClick={()=> setOpen(true)}>
                                    <i className="bi bi-play"></i>
                                    <span className="animated-video-play-btn" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FAQ;