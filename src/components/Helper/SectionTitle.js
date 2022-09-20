import React from 'react';

const SectionTitle = (props) => {
    const {smallTitle, bigTitle}= props;
    return (
        <>
            <div className='section-wrapper text-center pb-60'>
                <h6 className='theme-h6'>{smallTitle}</h6>
                <h2 className='theme-h2'>{bigTitle}</h2>
            </div>
        </>
    );
};

export default SectionTitle;