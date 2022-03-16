import React from 'react';
import { useState } from 'react';
import './nav.css';
import { ImHome } from 'react-icons/im';
import { RiUser3Fill } from 'react-icons/ri';
import { ImBook } from 'react-icons/im';
import { RiServiceFill } from 'react-icons/ri';
import { GiOpenFolder } from 'react-icons/gi';
import { SiGooglemessages } from 'react-icons/si';


const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><ImHome /></a>
            <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><RiUser3Fill /></a>
            <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><ImBook /></a>
            <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceFill /></a>
            <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><GiOpenFolder /></a>
            <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><SiGooglemessages /></a>
        </nav >
    )
}

export default Nav