import React from 'react';
import './index.css'

const Header = () => {
  return (
    <header>
    <div className='hero-image'></div>
        <span>Jessica Kincaid</span>

  <nav className='navbar'>
  <ul>
    <li>
    <a href="#">Fine Art</a>
    </li>
    <li>
    <a href="#">Development</a>
    </li>
    <li>
    <a href="#">Resume</a>
    </li>
    <li>
    <a href="#">Contact</a>
    </li>
    </ul>
  </nav>

    </header>
  )
}

export default Header;