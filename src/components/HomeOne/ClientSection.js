import React from 'react';
import providence from '../../assets/images/ClientLogo/providence.png';
import auchan from '../../assets/images/ClientLogo/auchan.png';
import xerox from '../../assets/images/ClientLogo/xerox.png';
import micron from '../../assets/images/ClientLogo/micron.png';
import mikron from '../../assets/images/ClientLogo/mikron.png';
import tranax from '../../assets/images/ClientLogo/tranax.png';

const ClientSection = () => {
    return (
        <>
            <section className='client-wrapper pt-120'>
               <div className='container'>
                <div className="row">
                <div className="col-12 col-md-6 col-lg-6">
                        <h6 className='theme-h6'>Join us and grow</h6>
                        <h3 className='theme-h3'>Over All $1 Billion Transactions from our clients in 2022</h3>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="client-logo-wrapper">
                            <div className='client-logo'>
                                <img  src={providence} alt="rezilla react template" />
                            </div>
                            <div className='client-logo'>
                                <img  src={auchan} alt="rezilla react template" />
                            </div>
                            <div className='client-logo'>
                                <img  src={xerox} alt="rezilla react template" /> 
                            </div>
                            <div className='client-logo'>
                                <img  src={micron} alt="rezilla react template" />
                            </div>
                            <div className='client-logo'>
                                <img  src={mikron} alt="rezilla react template" />
                            </div>
                            <div className='client-logo'>
                                <img  src={tranax} alt="rezilla react template" />
                            </div>
                        </div>
                    </div>
                </div>
               </div>
            </section>
        </>
    );
};

export default ClientSection;