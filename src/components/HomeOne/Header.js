import React from 'react';
import Navigation from '../Helper/Navigation';


const Header = () => {
    return (
        <>
        <header className='header-wrapper header-position'>
            <Navigation
            brandLogo="assets/images/logo/logo.png"
            />
        </header>
        </>
    );
};

export default Header;