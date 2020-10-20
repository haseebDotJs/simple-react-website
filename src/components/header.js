import React from 'react';
import './header.css'


const Header = ({nav,main}) => {
    return (
    <div className="header">
       {nav}
       {main}
    </div> 
    )
}
export default Header