import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './header.style.scss';


export default class Header extends Component {
    render() {
        return(
            <div className="nav-div">
                <li className="navbar-item">
                    <Link to="/registration" className="nav-link">Registration</Link>
                </li>    
            </div>
        )
    }
}