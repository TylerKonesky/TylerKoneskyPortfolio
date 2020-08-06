import React, {Component} from 'react';
import './Landing.css'

class Landing extends Component{
    render(){
        return(
            <div className="landing-wrapper">
                <div className="landing-section">
                    <h3>About Me</h3>
                    <p>
                        Random Text Random Text Random Text Random Text Random Text Random Text Random Text Random Text Random Text Random Text Random Text Random Text
                        Random Text Random Text Random Text Random Text Random Text Random Text Random Text Random Text Random Text Random Text Random Text Random Text
                        Random Text Random Text Random Text Random Text Random Text Random Text Random Text Random Text Random Text Random Text Random Text Random Text
                        Random Text Random Text Random Text Random Text Random Text Random Text Random Text Random Text Random Text Random Text Random Text Random Text
                        Random Text Random Text Random Text Random Text Random Text Random Text Random Text Random Text Random Text Random Text Random Text Random Text
                        Random Text Random Text Random Text Random Text Random Text Random Text Random Text Random Text Random Text Random Text Random Text Random Text
                        Random Text Random Text Random Text Random Text Random Text Random Text Random Text Random Text Random Text Random Text Random Text Random Text
                    </p>
                </div>
                <div className="landing-section">
                    <h3>Skills</h3>
                    <div className="skills-wrapper">
                        <ul>
                            <li>Javascript</li>
                            <li>React</li>
                            <li>Redux</li>
                            <li>NodeJS</li>
                            <li>Express</li>
                            <li>MongoDB</li>
                            <li>Mongoose</li>
                            <li>Redis</li>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>

                    </div>
                </div>
                <div className="landing-section">
                    <h3>Projects</h3>
                    <div className="projects-wrapper">
                        <div>Project</div>
                        <div className="image-wrapper">
                            <div className="main-image"> 
                                <div>Main Image</div>
                            </div>
                            <div className="sub-images">
                                <div>1</div>
                                <div>2</div>
                                <div>3</div>
                            </div>
                        </div>
                        

                    </div>
                </div>
            </div>
        )
    }
}

export default Landing