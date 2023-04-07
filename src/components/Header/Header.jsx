import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <div>
            <Link className='link' to="/">Home</Link>
            <Link className='link' to="/review">Order Review</Link>
            <Link className='link' to="/about">About Us</Link>
            <Link className='link' to="/checkout">Checkout</Link>
            
        </div>
    );
};

export default Header;