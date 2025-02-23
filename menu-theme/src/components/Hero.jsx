import React from 'react';
import profileImage from '../assets/jessica.png';
import Link from './Link';

const Hero = () => {
  return (
    <section className='hero-divider'>
      <div className='image'>
        <img src={profileImage} alt='Jessica Kincaid' />
        </div>
        <div className='hero-text'>
            <h1>Jessica Kincaid</h1>
            <p>Full Stack Developer</p>
            <p>Overland Park, KS</p>

            <Link href='#projects'>Check out my projects</Link>
        </div>
    </section>
  )
}

export default Hero;