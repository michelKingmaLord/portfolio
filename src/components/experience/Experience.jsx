import React from 'react';
import './experience.css';
import { BsFillPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
    return (
        <section id='experience'>
            <h5>Skills I Have</h5>
            <h2>My Experience</h2>
            <div className='container experience_container'>
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsFillPatchCheckFill />
                            <h4>HTML</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>

                        <article className='experience__details'>
                            <BsFillPatchCheckFill />
                            <h4>CSS</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>

                        <article className='experience__details'>
                            <BsFillPatchCheckFill />
                            <h4>JavaScript</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>

                        <article className='experience__details'>
                            <BsFillPatchCheckFill />
                            <h4>Tailwind</h4>
                            <small className='text-light'>n/a</small>
                        </article>

                        <article className='experience__details'>
                            <BsFillPatchCheckFill />
                            <h4>React</h4>
                            <small className='text-light'>Basic</small>
                        </article>
                    </div>
                </div>

                {/* END OF FRONTEND */}

                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsFillPatchCheckFill />
                            <h4>Node JS</h4>
                            <small className='text-light'>n/a</small>
                        </article>

                        <article className='experience__details'>
                            <BsFillPatchCheckFill />
                            <h4>MongoDB</h4>
                            <small className='text-light'>n/a</small>
                        </article>

                        <article className='experience__details'>
                            <BsFillPatchCheckFill />
                            <h4>PHP</h4>
                            <small className='text-light'>n/a</small>
                        </article>

                        <article className='experience__details'>
                            <BsFillPatchCheckFill />
                            <h4>MySQL</h4>
                            <small className='text-light'>Basic</small>
                        </article>

                        <article className='experience__details'>
                            <BsFillPatchCheckFill />
                            <h4>React</h4>
                            <small className='text-light'>Basic</small>
                        </article>

                        <article className='experience__details'>
                            <BsFillPatchCheckFill />
                            <h4>Python</h4>
                            <small className='text-light'>n/a</small>
                        </article>
                    </div>
                </div>
            </div>
        </section >
    );
}


export default Experience