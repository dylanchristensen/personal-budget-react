import React from 'react';
import {
    Link
  } from "react-router-dom";

function Menu() {
  return (
    <nav
        role="navigation"
        aria-label='main menu'
        itemScope
        itemType="https://schema.org/SiteNavigationElement"   
    
    >
        <ul>
            <li><Link itemProp="url" to="/">Home</Link></li>
            <li><Link itemProp="url" to="/login">Login</Link></li>
            <li><Link itemProp="url" to="/about">About</Link></li>
        </ul>
    </nav>
  );
}

export default Menu;
