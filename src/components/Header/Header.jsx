import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='HeaderComponents'>
            <Link to="/">Home</Link >
            <Link to="/review">Review</Link >
            <Link to="/about">About</Link >
            <Link to="/Login">Login</Link >
        </div>
    );
};

export default Header;