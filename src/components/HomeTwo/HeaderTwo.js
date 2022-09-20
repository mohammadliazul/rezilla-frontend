import React from 'react';
import Navigation from '../Helper/Navigation';

const HeaderTwo = () => {
    return (
        <>
            <header className='header-wrapper header-position header-style-two'>
                <Navigation
                    brandLogo="assets/images/logo/logo-2.png"
                />
            </header>
        </>
    );
};

export default HeaderTwo;