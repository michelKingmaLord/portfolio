import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { FaDribbbleSquare } from 'react-icons/fa';



const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://linkedin.com" target="https://www.linkedin.com/in/michelkingmalord/"><FaLinkedin /></a>
            <a href="https://github.com" target="_blank"><FaGithubSquare /></a>
            <a href="https://dribbble.com" target="_blank"><FaDribbbleSquare /></a>
        </div>
    )
}

export default HeaderSocials