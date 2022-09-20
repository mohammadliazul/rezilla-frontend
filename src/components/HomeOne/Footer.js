import React from 'react';
import logo from '../../assets/images/logo.png';
import recentPostImg from '../../assets/images/HomeOne/Footer/recent-post-img.png';

const Footer = () => {
    return (
        <>
            <footer className="footer-section-wrapper text-white">
                <div className="footer-widgets-area py-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-6 col-xxl-3">
                                <div className="footer-widgets footer-about-widget">
                                    <div className='footer-logo pb-30'>
                                    <a href="/">
                                        <img src={logo} alt="Logo" />
                                    </a>
                                    </div>
                                    <p>There are many variatons of passages of
                                    available but the majorit have suffered a
                                    form by injected humor or randomseds
                                    say. It high at my mind by roof.</p>
                                    <div className="footer-social-link mt-40">
                                        <ul>
                                            <li>
                                            <a href="http://facebook.com">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                            </li>
                                            <li>
                                                <a href="http://twitter.com">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.instagram.com/">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.pinterest.com/">
                                                    <i className="fab fa-pinterest-p"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-xxl-3">
                                <div className="footer-widgets footer-link-widget">
                                    <h4 className="footer-link-widget-title pb-50">Quick Links</h4>
                                    <ul className="footer-link">
                                        <li>
                                            <a href="/#">Explore Products</a>
                                        </li>
                                        <li>
                                            <a href="/#">Bundle & Save</a>
                                        </li>
                                        <li>
                                            <a href="/#">Continue Previous Quote</a>
                                        </li>
                                        <li>
                                            <a href="/#">Report a Claim</a>
                                        </li>
                                        <li>
                                            <a href="/#">Make a Payment</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-xxl-3">
                                <div className="footer-widgets footer-recent-post-widget">
                                <h4 className="footer-recent-post-widget-title pb-50">Recent Post</h4>
                                    <ul>
                                        <li>
                                            <div className="recent-post-item">
                                                <img src={recentPostImg} alt="rezilla react theme" />
                                                <div className='recent-post-content'>
                                                    <a href="/">Young modern people casual wear</a>
                                                    <span><i className="bi bi-calendar2-date"></i> 06 Mar 2022</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="recent-post-item">
                                                <img src={recentPostImg} alt="rezilla react theme" />
                                                <div className='recent-post-content'>
                                                <a href="/">Young modern people casual wear</a>
                                                    <span><i className="bi bi-calendar2-date"></i> 06 Mar 2022</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-xxl-3">
                                <div className="footer-widgets footer-widget-contact">
                                    <h4 className="footer-widget-contact-title pb-50">Contact Us</h4>
                                    <ul>
                                        <li>
                                            <div className='icon'><i className="bi bi-geo-alt-fill"></i></div>
                                            <div className="content">
                                                <p>1791 Yorkshire Circle Kitty Town NC New York</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='icon'><i className="bi bi-telephone-fill"></i></div>
                                            <div className="content">
                                                <p>+456 123 4455</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='icon'><i className="bi bi-envelope"></i></div>
                                            <div className="content">
                                                <span>infoyour@gmail.com</span>
                                                <span>exampleabait@gmail.com</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-wrapper">
                    <div className="container">
                        <div className="copyright-inner">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                    <div className="copyright-info">
                                        <p>{new Date().getFullYear()} &copy; Developed by <a href="https://www.linkedin.com/in/liazul/"> ❤ Liazul</a></p>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 text-end">
                                    <div className="copyringt-info-menu">
                                        <ul>
                                            <li><a href="/">Privacy Policy</a></li>
                                            <li><a href="/">Terms & Conditions</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;