import React from 'react';
import './nav.css';
import { ImHome } from 'react-icons/im';
import { RiUser3Fill } from 'react-icons/ri';
import { ImBook } from 'react-icons/im';
import { RiServiceFill } from 'react-icons/ri';
import { GiOpenFolder } from 'react-icons/gi';
import { SiGooglemessages } from 'react-icons/si';


const Nav = () => {
    return (
        <nav>
            <a href='#'><ImHome /></a>
            <a href='#about'><RiUser3Fill /></a>
            <a href='#experience'><ImBook /></a>
            <a href='#services'><RiServiceFill /></a>
            <a href='#portfolio'><GiOpenFolder /></a>
            <a href='#contact'><SiGooglemessages /></a>
        </nav>
    )
}

export default Nav