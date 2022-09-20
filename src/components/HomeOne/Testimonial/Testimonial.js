import React from 'react';
import SectionTitle from '../../Helper/SectionTitle';
import AuthorImg1 from '../../../assets/images/HomeOne/Testimonial/author-img-1.png';
import AuthorImg2 from '../../../assets/images/HomeOne/Testimonial/author-img-2.png';
import Slider from 'react-slick';



const Testimonial = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 1,
            },
          }
        ]
      };

    return (
        <>
            <section className='testimonial-section-wrapper py-120'>
                <div className="container">
                    <SectionTitle
                    smallTitle="Testimonial"
                    bigTitle="Our Client Says"
                    />
                    
                    <div className="tesimonial-item-wrapper">
                        <Slider {...settings}>
                            <div className="tesimonial-item">
                                <div className="testimonial-item-inner">
                                    <div className="testimonial-left">
                                        <div className="testimonial-img">
                                            <img src={AuthorImg1} alt="" />
                                        </div>
                                    </div>
                                    <div className="testimonial-right">
                                        <div className="testimonial-content">
                                            <div className="testimonial-content-top d-flex justify-content-between align-items-center pb-30">
                                                <div className="quote">
                                                    <i className="fas fa-quote-left"></i>
                                                </div>
                                                <div className="rating">
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-half"></i>
                                                </div>
                                            </div>
                                            <p className='m-0'>There are many varisations of our Lorem Ipsum available, but ai the majoritis suffered alteration in so me form, by injected</p>
                                            <div className="testimonial-author-info pt-30">
                                                <h2>Arnold Burner</h2>
                                                <span>Senior Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tesimonial-item">
                                <div className="testimonial-item-inner">
                                    <div className="testimonial-left">
                                        <div className="testimonial-img">
                                            <img src={AuthorImg2} alt="" />
                                        </div>
                                    </div>
                                    <div className="testimonial-right">
                                        <div className="testimonial-content">
                                            <div className="testimonial-content-top d-flex justify-content-between align-items-center pb-30">
                                                <div className="quote">
                                                    <i className="fas fa-quote-left"></i>
                                                </div>
                                                <div className="rating">
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-half"></i>
                                                </div>
                                            </div>
                                            <p className='m-0'>There are many varisations of our Lorem Ipsum available, but ai the majoritis suffered alteration in so me form, by injected</p>
                                            <div className="testimonial-author-info pt-30">
                                                <h2>Arnold Burner</h2>
                                                <span>Senior Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tesimonial-item">
                                <div className="testimonial-item-inner">
                                    <div className="testimonial-left">
                                        <div className="testimonial-img">
                                            <img src={AuthorImg1} alt="" />
                                        </div>
                                    </div>
                                    <div className="testimonial-right">
                                        <div className="testimonial-content">
                                            <div className="testimonial-content-top d-flex justify-content-between align-items-center pb-30">
                                                <div className="quote">
                                                    <i className="fas fa-quote-left"></i>
                                                </div>
                                                <div className="rating">
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-half"></i>
                                                </div>
                                            </div>
                                            <p className='m-0'>There are many varisations of our Lorem Ipsum available, but ai the majoritis suffered alteration in so me form, by injected</p>
                                            <div className="testimonial-author-info pt-30">
                                                <h2>Arnold Burner</h2>
                                                <span>Senior Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tesimonial-item">
                                <div className="testimonial-item-inner">
                                    <div className="testimonial-left">
                                        <div className="testimonial-img">
                                            <img src={AuthorImg2} alt="" />
                                        </div>
                                    </div>
                                    <div className="testimonial-right">
                                        <div className="testimonial-content">
                                            <div className="testimonial-content-top d-flex justify-content-between align-items-center pb-30">
                                                <div className="quote">
                                                    <i className="fas fa-quote-left"></i>
                                                </div>
                                                <div className="rating">
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-half"></i>
                                                </div>
                                            </div>
                                            <p className='m-0'>There are many varisations of our Lorem Ipsum available, but ai the majoritis suffered alteration in so me form, by injected</p>
                                            <div className="testimonial-author-info pt-30">
                                                <h2>Arnold Burner</h2>
                                                <span>Senior Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div>
                                <h3>3</h3>
                            </div>
                            <div>
                                <h3>4</h3>
                            </div>
                            <div>
                                <h3>5</h3>
                            </div>
                            <div>
                                <h3>6</h3>
                            </div>
                            <div>
                                <h3>7</h3>
                            </div>
                            <div>
                                <h3>8</h3>
                            </div> */}
                        </Slider>
                    </div>
                </div>
            </section>
            {/* <section className='testimonial-section-wrapper py-120'>
                <div className="container">
                    <SectionTitle
                    smallTitle="Testimonial"
                    bigTitle="Our Client Says"
                    />
                    
                    <div className="tesimonial-item-wrapper">
                        <div className="row">
                            <Slider settings={settings}>

                            <div className="col-md-6">
                                <div className="tesimonial-item">
                                    <div className="testimonial-item-inner">
                                        <div className="testimonial-left">
                                            <div className="testimonial-img">
                                                <img src={AuthorImg1} alt="" />
                                            </div>
                                        </div>
                                        <div className="testimonial-right">
                                            <div className="testimonial-content">
                                                <div className="testimonial-content-top d-flex justify-content-between align-items-center pb-30">
                                                    <div className="quote">
                                                        <i className="fas fa-quote-left"></i>
                                                    </div>
                                                    <div className="rating">
                                                        <i className="bi bi-star-fill"></i>
                                                        <i className="bi bi-star-fill"></i>
                                                        <i className="bi bi-star-fill"></i>
                                                        <i className="bi bi-star-fill"></i>
                                                        <i className="bi bi-star-half"></i>
                                                    </div>
                                                </div>
                                                <p className='m-0'>There are many varisations of our Lorem Ipsum available, but ai the majoritis suffered alteration in so me form, by injected</p>
                                                <div className="testimonial-author-info pt-30">
                                                    <h2>Arnold Burner</h2>
                                                    <span>Senior Designer</span>
                                                </div>
                                            </div>
                                     </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="tesimonial-item">
                            <div className="testimonial-item-inner">
                                <div className="testimonial-left">
                                    <div className="testimonial-img">
                                        <img src={AuthorImg2} alt="" />
                                    </div>
                                </div>
                                <div className="testimonial-right">
                                    <div className="testimonial-content">
                                        <div className="testimonial-content-top d-flex justify-content-between align-items-center pb-30">
                                            <div className="quote">
                                                <i className="fas fa-quote-left"></i>
                                            </div>
                                            <div className="rating">
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-half"></i>
                                            </div>
                                        </div>
                                        <p className='m-0'>There are many varisations of our Lorem Ipsum available, but ai the majoritis suffered alteration in so me form, by injected</p>
                                        <div className="testimonial-author-info pt-30">
                                            <h2>Arnold Burner</h2>
                                            <span>Senior Designer</span>
                                        </div>
                                    </div>
                                </div>
                                </div>
                             </div>
                            </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    );
};

export default Testimonial;