import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './Header.css';

class Header extends Component{
    render(){
        return(
            <nav className="header-wrapper">
                <div className="nav-wrapper light-blue">
                    <a className="center brand-logo"><Link to="/">Tyler Konesky</Link></a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><Link to="/pageAdmin">Home</Link></li>
                        <li><Link to="/pageAdmin">Home</Link></li>
                        <li><Link to="/pageAdmin">Home</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header