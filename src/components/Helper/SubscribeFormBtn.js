import React from 'react';

const SubscribeFormBtn = () => {
    return (
        <div className='subscribe-form-wrapper'>
            <form className='subscribe-form'>
                <input type="email" name='Email' placeholder='Enter Your Email' required/>
                <button className='theme-button button-black' type="submit">Subscribe</button>
            </form>
        </div>
    );
};

export default SubscribeFormBtn;