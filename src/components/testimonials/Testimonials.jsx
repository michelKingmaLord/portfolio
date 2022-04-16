import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';
import AVTR5 from '../../assets/avatar5.jpg';
import AVTR6 from '../../assets/avatar6.jpg';

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>
            <div className="container testimonials__container">
                <article className="testimonials">
                    <div className="client__avatar">
                        <img src={AVTR1} alt="Avatar One" />
                        <h5 className='client__name'>Ernest Achiever</h5>
                        <small className='client__review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quisquam nostrum laudantium voluptas.</small>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Testimonials