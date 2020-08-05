import React, {Component} from 'react';
import './Header.css';

class Header extends Component{
    render(){
        return(
            <div className="header-container">
                <div className="header-left"> 
                    <div className="header-left-text">
                        Tyler Konesky
                    </div>
                </div>
                <div className="header-right">
                    <div className="header-right-links">
                        <a href="/">Home</a>
                        <a href="/">Home</a>
                        <a href="/">Home</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header