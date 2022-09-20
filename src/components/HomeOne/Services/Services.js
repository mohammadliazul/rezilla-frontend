import React from 'react';
import SectionTitle from '../../Helper/SectionTitle';
import ServiceItem from './ServiceItem';

const Services = () => {
    return (
        <>
            <section className='services-wrapper pt-120 pb-70'>
                <div className='container'>
                    <SectionTitle
                        smallTitle="Services"
                        bigTitle="Our Exclusive Services"
                    />
                    <div className="row">
                        <ServiceItem
                            iconName="bi bi-tools"
                            title="Web Customization"
                            info="There are many variations of passagei majority have suffered alteration in ais randomised words which"
                        />
                        <ServiceItem
                            iconName="bi bi-columns-gap"
                            title="UI/UX Branding"
                            info="There are many variations of passagei majority have suffered alteration in ais randomised words which"
                        />
                        <ServiceItem
                            iconName="bi bi-graph-up"
                            title="Perfect Strategy"
                            info="There are many variations of passagei majority have suffered alteration in ais randomised words which"
                        />
                        <ServiceItem
                            iconName="bi bi-lightbulb"
                            title="Innovative Ideas"
                            info="There are many variations of passagei majority have suffered alteration in ais randomised words which"
                        />
                        <ServiceItem
                            iconName="bi bi-clock-history"
                            title="Time Management"
                            info="There are many variations of passagei majority have suffered alteration in ais randomised words which"
                        />
                        <ServiceItem
                            iconName="bi bi-credit-card-2-front"
                            title="Payment Gateways"
                            info="There are many variations of passagei majority have suffered alteration in ais randomised words which"
                        />
                    </div>
                </div> 
            </section>
        </>
    );
};

export default Services;