import React from 'react';
import './contact.css';
import { AiOutlineMail } from 'react-icons/ai';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';

const Contact = () => {
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact_container">
                <div className="contact__options">
                    <article className="contact__option">
                        <AiOutlineMail />
                        <h4>Email</h4>
                        <h5>michelkl@outlook.com</h5>
                        <a href="mailto:michelkl@outlook.com" target="_blank">Send a message</a>
                    </article>

                    <article className="contact__option">
                        <RiMessengerLine />
                        <h4>Messenger</h4>
                        <h5>https://m.me/INSÉRER le lien de facebook </h5>
                        <a href="https://www.facebook.com/" target="_blank">Send a message</a>
                    </article>

                    <article className="contact__option">
                        <BsWhatsapp />
                        <h4>WhatsApp</h4>
                        <h5>+1 418 609 3222</h5>
                        <a href="https://api.whatsapp.com/send?phone=14186093222" target="_blank">Send a message</a>
                    </article>

                    {/* END OF CONTACT OPTIONS */}
                    <form action=""></form>
                </div>
            </div>
        </section>
    )
}

export default Contact