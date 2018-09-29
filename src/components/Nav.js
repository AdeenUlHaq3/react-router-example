import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

export default () => 
    <div>
        <NavLink to='/' className='link'>Home</NavLink>
        <NavLink to='/about' className='link'>About</NavLink>
        <NavLink to='/contact' className='link'>Contact</NavLink>
    </div>