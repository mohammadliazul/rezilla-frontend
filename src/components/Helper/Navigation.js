import React from 'react';
import {HiMenu} from 'react-icons/hi';
import SearchPopUp from './SearchPopUp';
import HeaderSignUp from './HeaderSignUp';

const Navigation = (props) => {
    const {brandLogo}=props;
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                <a href='/' className='logo'><img src={`${process.env.PUBLIC_URL}/${brandLogo}`} alt="rezilla" /></a>
                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbar-content">
                        <HiMenu className='text-white'/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar-content">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 " >
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" data-bs-toggle="dropdown"
                                    data-bs-auto-close="outside">About</a>
                                <ul className="dropdown-menu shadow animate slideIn">
                                    <li><a className="dropdown-item" href="/">Gallery</a></li>
                                    <li><a className="dropdown-item" href="blog.html">Blog</a></li>

                                    <li className="dropend">
                                        <a href="/" className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown"
                                            data-bs-auto-close="outside">Submenu Right</a>
                                        <ul className="dropdown-menu shadow animate slideIn">
                                            <li><a className="dropdown-item" href="/"> Second level 1</a></li>
                                            <li><a className="dropdown-item" href="/"> Second level 2</a></li>
                                            <li><a className="dropdown-item" href="/"> Second level 3</a></li>
                                            <li className="dropend">
                                                <a href="/" className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown"
                                                    data-bs-auto-close="outside">Let's go deeper!</a>
                                                <ul className="dropdown-menu dropdown-submenu shadow animate slideIn">
                                                    <li><a className="dropdown-item" href="/"> Third level 1</a></li>
                                                    <li><a className="dropdown-item" href="/"> Third level 2</a></li>
                                                    <li><a className="dropdown-item" href="/"> Third level 3</a></li>
                                                    <li><a className="dropdown-item" href="/"> Third level 4</a></li>
                                                    <li className="dropend">
                                                        <a href="/" className="dropdown-item dropdown-toggle"
                                                            data-bs-toggle="dropdown">Still don't have enough? Go much
                                                            deeper!</a>
                                                        <ul className="dropdown-menu dropdown-submenu shadow animate slideIn">
                                                            <li><a className="dropdown-item" href="/"> Third level 1</a></li>
                                                            <li><a className="dropdown-item" href="/"> Third level 2</a></li>
                                                            <li><a className="dropdown-item" href="/"> Third level 3</a></li>
                                                            <li><a className="dropdown-item" href="/"> Third level 4</a></li>
                                                            <li><a className="dropdown-item" href="/"> Third level 5</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a className="dropdown-item" href="/"> Third level 5</a></li>
                                        </ul>
                                    </li>
                                    <li>
           
                                    </li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" data-bs-toggle="dropdown"
                                    data-bs-auto-close="outside">Multilevel 2</a>
                                <ul className="dropdown-menu shadow animate slideIn">
                                    <li><a className="dropdown-item" href="/">Gallery</a></li>
                                    <li><a className="dropdown-item" href="blog.html">Blog</a></li>

                                    <li className="dropend">
                                        <a href="/" className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown"
                                            data-bs-auto-close="outside">Submenu Right</a>
                                        <ul className="dropdown-menu shadow animate slideIn">
                                            <li><a className="dropdown-item" href="/"> Second level 1</a></li>
                                            <li><a className="dropdown-item" href="/"> Second level 2</a></li>
                                            <li><a className="dropdown-item" href="/"> Second level 3</a></li>
                                            <li className="dropend">
                                                <a href="/" className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown"
                                                    data-bs-auto-close="outside">Let's go deeper!</a>
                                                <ul className="dropdown-menu dropdown-submenu shadow animate slideIn">
                                                    <li><a className="dropdown-item" href="/"> Third level 1</a></li>
                                                    <li><a className="dropdown-item" href="/"> Third level 2</a></li>
                                                    <li><a className="dropdown-item" href="/"> Third level 3</a></li>
                                                    <li><a className="dropdown-item" href="/"> Third level 4</a></li>
                                                    <li className="dropend">
                                                        <a href="/" className="dropdown-item dropdown-toggle"
                                                            data-bs-toggle="dropdown">Still don't have enough? Go much
                                                            deeper!</a>
                                                        <ul className="dropdown-menu dropdown-submenu shadow animate slideIn">
                                                            <li><a className="dropdown-item" href="/"> Third level 1</a></li>
                                                            <li><a className="dropdown-item" href="/"> Third level 2</a></li>
                                                            <li><a className="dropdown-item" href="/"> Third level 3</a></li>
                                                            <li><a className="dropdown-item" href="/"> Third level 4</a></li>
                                                            <li><a className="dropdown-item" href="/"> Third level 5</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a className="dropdown-item" href="/"> Third level 5</a></li>
                                        </ul>
                                    </li>
                                    <li>
           
                                    </li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown dropdown-mega position-static">
                                <a className="nav-link dropdown-toggle" href="/" data-bs-toggle="dropdown"
                                    data-bs-auto-close="outside">Megamenu</a>
                                <div className="dropdown-menu shadow animate slideIn">
                                    <div className="mega-content px-md-4">
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-lg-3 col-sm-6 py-4 px-xl-5 px-4">
                                                    <h5>Service</h5>
                                                    <div className="list-group">
                                                        <a className="list-group-item" href="/">Accomodations</a>
                                                        <a className="list-group-item" href="/">Terms & Conditions</a>
                                                        <a className="list-group-item" href="/">Privacy</a>
                                                        <a className="list-group-item" href="/">Lorum</a>
                                                        <a className="list-group-item" href="/">Lorum</a>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 py-4 px-xl-5 px-4">
                                                    <h5>Service</h5>
                                                    <div className="list-group">
                                                        <a className="list-group-item" href="/">Accomodations</a>
                                                        <a className="list-group-item" href="/">Terms & Conditions</a>
                                                        <a className="list-group-item" href="/">Privacy</a>
                                                        <a className="list-group-item" href="/">Lorum</a>
                                                        <a className="list-group-item" href="/">Lorum</a>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 py-4 px-xl-5 px-4">
                                                    <h5>Service</h5>
                                                    <div className="list-group">
                                                        <a className="list-group-item" href="/">Accomodations</a>
                                                        <a className="list-group-item" href="/">Terms & Conditions</a>
                                                        <a className="list-group-item" href="/">Privacy</a>
                                                        <a className="list-group-item" href="/">Lorum</a>
                                                        <a className="list-group-item" href="/">Lorum</a>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 py-4 px-xl-5 px-4">
                                                    <h5>Service</h5>
                                                    <div className="list-group">
                                                        <a className="list-group-item" href="/">Accomodations</a>
                                                        <a className="list-group-item" href="/">Terms & Conditions</a>
                                                        <a className="list-group-item" href="/">Privacy</a>
                                                        <a className="list-group-item" href="/">Lorum</a>
                                                        <a className="list-group-item" href="/">Lorum</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Link</a>
                            </li>
                        </ul>
                        <ul className="nav-right">
                            <SearchPopUp/>
                            <HeaderSignUp/>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navigation;