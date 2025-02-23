import React from 'react';
import { useState } from 'react';
import menu from '../assets/open_menu.svg';
import close from '../assets/close_menu.svg';

const Header = () => {
  const [ isOpen, setIsOpen ] = React.useState(false);
  return (
    <header>
      <span>Jessica Kincaid</span>
      <button className='menu-btn'
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Navigation-menu"
        aria-expanded={isOpen}
        >
        <img src={isOpen? close: menu} alt='menu' />
      </button> 
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <a href="#fine-art">About</a>
          </li>
          <li>
            <a href="#development">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;