import React from 'react';
import './navbar.css'

const Navbar = ({children : [logo,navOptions]}) => {
    return ( <nav className="nav">
       {logo}
       {navOptions}
    </nav> )
}
export default Navbar