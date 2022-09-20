import React from 'react';
import {BiUserCheck} from 'react-icons/bi';
import {TbClipboardCheck} from 'react-icons/tb';
import {BiTrophy} from 'react-icons/bi';
import {TbStars} from 'react-icons/tb';
import SingleCountUp from '../Helper/SingleCountUp';
const CounterSection = () => {
    return (
        <>
            <section className='counter-section-wrapper py-50 mt-50'>
               <div className='container'>
                <div className="row d-flex justify-content-around">
                        <div className='col col-12 col-sm-6 col-lg-3 text-center'>
                            <div className="d-flex flex-column align-items-center">
                                <div className='icon-wrapper'><BiUserCheck className='icon'/></div>
                                <SingleCountUp
                                    countUpValue="8245" 
                                    suffix="+" 
                                    title="Active Clients"
                                />
                            </div>
                        </div>
                        <div className='col col-12 col-sm-6 col-lg-3 text-center'>
                            <div className="d-flex flex-column align-items-center">
                                <div className='icon-wrapper'><TbClipboardCheck className='icon'/></div>
                                <SingleCountUp
                                    countUpValue="1850" 
                                    suffix="+" 
                                    title="Projects Done"
                                />
                            </div>
                        </div>
                        <div className='col col-12 col-sm-6 col-lg-3 text-center'>
                            <div className="d-flex flex-column align-items-center">
                                <div className='icon-wrapper'><TbStars className='icon'/></div>
                                <SingleCountUp
                                    countUpValue="264" 
                                    suffix="+" 
                                    title="Gain Reviews"
                                />
                           </div>
                        </div>
                        <div className='col col-12 col-sm-6 col-lg-3 text-center'>
                            <div className="d-flex flex-column align-items-center">
                                <div className='icon-wrapper'><BiTrophy className='icon'/></div>
                                <SingleCountUp
                                    countUpValue="165" 
                                    suffix="+" 
                                    title="Awards Win"
                                />
                           </div>
                        </div>
                    </div>
               </div>
            </section>
        </>
    );
};

export default CounterSection;