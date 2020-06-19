import React from 'react'
import {Link} from 'react-router-dom'
import "./NavBar.css";

const NavBar = () => <nav>
    <header className="header">
        <h1>VISUAL DESIGN 2020</h1>
        <h2>URSULA KESEK</h2>
    </header>
    <ul>
        <li>
            <Link to='/' exact>HomePage</Link>
        </li>
        <li>
            <Link to='/mockups' exact>MockUps File</Link>
        </li>

        <li>
            <Link to='/assets' exact>Assets File</Link>
        </li>
        <li>
            <Link to='/gifsprite' exact>GifSprite File</Link>
        </li>

    </ul>
    </nav>

export default NavBar;
