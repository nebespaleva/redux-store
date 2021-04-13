import React from 'react';
import ErrorImg from './ErrorImg.png';
import './error-indicator.css';

const ErrorIndicator = () => {
    return(
        <div
            className='error-wrapper'>
            <img 
                src={ErrorImg} 
                alt='Error'
                className='error-img'/>
            <span
                className='error-msg'>
                Sorry, something doesn't work :(
            </span>
            <span
                className='error-msg'>
                We are making every effort to fix this, really!
            </span>
        </div>
    )
}

export default ErrorIndicator;
