import React from 'react';

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <footer className='text-center mx-5'>
            <p><small>CopyRight &copy; {year}</small></p>

        </footer>
    );
};

export default Footer;