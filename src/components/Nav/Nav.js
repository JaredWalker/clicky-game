import React from 'react';
import './Nav.css';

const Nav = props => (
    <nav className="navbar navbar-default" >
        <ul>
            <li className="brand"> Muscle Car Game</li>
            <li>Click on an image!</li>
            <li>Current Score: {props.score} | Highest Score: {props.highScore}  </li>
        </ul>
    </nav>
);


export default Nav;
