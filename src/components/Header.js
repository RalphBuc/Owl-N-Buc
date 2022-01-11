import { useState } from 'react';

const Header = ({ image, icon }) => {
    const [state] = useState({
        heading: 'Owl N Buc',
        paragraph: 'Looking for nothing? You are in the right place',
    });
    return (
        <div className='header'>
            <div className='header__image'>
                <img src={image} alt='bird' />
            </div>
            <div className='header__icon'>
                <img src={icon} alt='icon' />
            </div>
            <div className='header__text'>
                <div className='header__text__h1'>
                    <h1>{state.heading}</h1>
                </div>
                <div className='header__text__p'>
                    <p>{state.paragraph}</p>
                </div>
            </div>
        </div>
    );
};

export default Header;
