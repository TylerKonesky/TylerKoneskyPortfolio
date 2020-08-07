import React, {Component} from 'react';
import Project from '../Projects/Project';
import About from '../About/About';
import Skills from '../skills/Skills';
import './Landing.css'

class Landing extends Component{
    render(){
        return(
            <div >
                <About />
                <Skills />
                <Project />
                <Project />
            </div>
        )
    }
}

export default Landing