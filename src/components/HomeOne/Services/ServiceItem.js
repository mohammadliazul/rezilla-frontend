import React from 'react';

const ServiceItem = (props) => {
    const {iconName, title, info}=props;

    return (
        <>
            <div className='col-12 col-sm-6 col-md-6 col-lg-4 px-40 pb-50'>
                <div className="service-card service-style-one text-start">
                    <div className="service-icon">
                        <div className='service-icon-wrapper'>
                            <i className={iconName}></i>
                        </div>
                    </div>
                    <div className='service-content'>
                        <h6 className='h6 pt-30 pb-20 m-0'>{title}</h6>
                        <p className='m-0'>{info}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceItem;