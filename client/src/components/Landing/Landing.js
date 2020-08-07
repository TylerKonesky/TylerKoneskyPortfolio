import React, {Component} from 'react';
import Project from '../Projects/Project';
import About from '../About/About';
import Skills from '../skills/Skills';
import roxmain from '../../images/rox-main.png'
import rox1 from '../../images/rox-1.png'
import rox2 from '../../images/rox-2.png'

import './Landing.css'

class Landing extends Component{
    render(){
        return(
            <div >
                <About />
                <Skills />
                <Project title="Roxabillys" image1={roxmain} image2={rox1} image3={rox2}/>
                <Project />
            </div>
        )
    }
}

export default Landing