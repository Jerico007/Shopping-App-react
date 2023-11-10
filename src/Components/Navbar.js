import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='Navbar'>
            <h1>Shopping Cart</h1>
            <div className='Navbar-items'>
            <NavLink to={"/"}>Home page</NavLink>
            <NavLink to={"/cart"}>Cart page</NavLink>
            </div>
        </div>
    );
}

export default Navbar;
