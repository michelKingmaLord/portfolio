import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/michelkl.jpeg';
import HeaderSocials from './HeaderSocials';


const Header = () => {
    return (
        <header>

            <div className="container header_container">
                {/* Introduction */}
                <h5>Hello I'm</h5>
                <h1>Michel Kingma-Lord</h1>
                <h5 className='text-light'>Fullstack Developer</h5>
                <CTA />
                <HeaderSocials />

                {/* Profile Picture */}
                <div className="me">
                    <img src={ME} alt=""></img>
                </div>

                {/*Scroll Down section */}
                <a href="#contact" className='scroll__down'>Scroll Down</a>

                {/*Social Media Buttons */}

            </div>
        </header>
    )
}

export default Header