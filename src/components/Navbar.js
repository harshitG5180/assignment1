import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/navbar.css';
import Brand from './Brand';
import BarIcon from '../assets/icons/BarIcon';
import CloseIcon from '../assets/icons/CloseIcon';

const Navbar = () => {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    const openNav = () => {
        setIsOverlayOpen(true);
    }

    const closeNav = () => {
        setIsOverlayOpen(false);
    }

    const pages = [
        { path: '/', label: 'Home' },
        { path: '/multiplayer', label: 'Multiplayer' },
        { path: '/campaign', label: 'Campaign' },
        { path: '/soldier', label: 'Soldier' },
        { path: '/store', label: 'Store' },
        { path: '/more', label: 'More' }
    ];

    return (
        <main className="main">

            <div className="overlay" style={{ height: isOverlayOpen ? '100%' : '0%' }}>
                <a href="#" className="closebtn" onClick={closeNav}>
                    <CloseIcon size={18} />
                </a>
                <div className="overlayContent">
                    {pages.map((page, index) => (
                        <Link to={page.path} key={index} onClick={closeNav}>
                            {page.label}
                        </Link>
                    ))}
                </div>
            </div>


            <div className="navbar">
                <nav className="nav">
                    <ul className="navList">
                        {pages.map((page, index) => (
                            <li key={index}>
                                <Link to={page.path}>
                                    {page.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="navbarBorder"></div>
            </div>


            <div className="brand">
                <Brand />
                <div className="brandText">
                    Battlefield 4
                </div>
            </div>

            <div className="bar" onClick={openNav}>
                <BarIcon size={18} />
            </div>

        </main>
    );
}

export default Navbar;
