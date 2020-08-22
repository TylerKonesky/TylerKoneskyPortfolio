import React, {Component} from 'react';
import {Carousel} from 'react-responsive-carousel';
import SimpleImageSlider from 'react-simple-image-slider';
import Image1 from '../images/binary.jpg';
import Image2 from '../images/binary2.jpg';
import Image3 from '../images/computer.jpg';
import Image4 from '../images/keyboard.jpg';
import ProfilePic from '../images/atlanta.jpg'
import Typed from 'typed.js';
import './portfolio.css';



class Portfolio extends Component{
    constructor(){
        super();
        this.state = {
            images: [
                {url: Image1},
                {url: Image2},
                {url: Image3},
                {url: Image4},
            ],
            typed: ''
            
        }
    }
    componentDidMount(){
        const strings = ["Web Developer", "Software Engineer", "Learner"];
        const options = {
            strings: strings,
            typeSpeed: 80,
            backSpeed: 80,
            loop: true,
            showCursor: false
            
        };
        this.typed = new Typed('.typed', options)
        
    }
    render(){
        return(
            <div>
                <div className="overlay"></div>
                <SimpleImageSlider className="slider" width={'100vw'} height={'100vh'} images={this.state.images} showBullets={true} slideDuration={0.5}/>
                
                <div className="title-message">
                    <div className="heading">
                        <p className="main">Tyler Konesky</p>
                        <p className="sub typed">{this.state.typed}</p>
                    </div>
                </div>

                <div id="about" className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <img className="about-image" src={ProfilePic}/>
                            </div>
                            <div className="col-md-7">
                                <h4>My name is Tyler Konesky</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </p>
                            </div>
                        </div>

                    </div>
                    
                </div>

                <div id="skills" className="section skills-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h2>Technical Skills</h2>
                                <p>A representation of my proficiency in each skill</p>
                            </div>
                            <Carousel autoPlay={true} showArrows={true}> 
                                <div>
                                    <img alt="" src={Image1}></img>
                                    <p className="legend">Legend 1</p>
                                </div>
                                <div>
                                    <img alt="" src={Image1}></img>
                                    <p className="legend">Legend 1</p>
                                </div>
                                <div>
                                    <img alt="" src={Image1}></img>
                                    <p className="legend">Legend 1</p>
                                </div>
                                <div>
                                    <img alt="" src={Image1}></img>
                                    <p className="legend">Legend 1</p>
                                </div>
                                <div>
                                    <img alt="" src={Image1}></img>
                                    <div>Javascript</div>
                                    <p className="legend">Legend 1</p>
                                </div>

                                
                            </Carousel>
                           
                        </div>
                        

                    </div>
                    
                    
                </div>
                
            </div>
        )
    }
}

export default Portfolio