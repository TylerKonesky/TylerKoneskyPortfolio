import React, {Component} from 'react';
import CountUp from 'react-countup';
import VisabilitySensor from 'react-visibility-sensor';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import SimpleImageSlider from 'react-simple-image-slider';

import Image1 from '../images/binary.jpg';
import ProfilePic from '../images/atlanta.jpg';
import Rox1 from '../images/rox-main.png';
import Acousana from '../images/Acousana.png';
import Taylorsville from '../images/Taylorsville.png'
import Typed from 'typed.js';
import './portfolio.css';



class Portfolio extends Component{
    constructor(){
        super();
        this.state = {
            images: [
                {url: Image1},
            ],
            typed: '',
            viewPortEntered: false,
            filter: 'All',
            projects: [
                {   technologies: 'React, Javascript, NodeJS, Express, MongoDB, Mongoose',
                    description: 'Contracted to work on various components including CSS/Styling, Google Maps, SMTP Servers. Fully Mobile responsive.',
                    image: Acousana,
                    github: '',
                    host: 'https://acousana.com',
                    title: 'Acousana'
                },
                {   technologies: 'React, Javascript, NodeJS, Express, MongoDB, Mongoose, Redux, Passport, GoogleAuth',
                    description: 'Contracted to work build a website for the Taylorsville High School football team in the chance that the team needs to live stream their games. The website is mobile responsive and utilizes RESTful APIs, and also includes a full admin console to allow the users full capability to manage and edit the website.',
                    image: Taylorsville,
                    github: 'https://github.com/TylerKonesky/tvfb',
                    host: 'https://tvillefootball.herokuapp.com/',
                    title: 'Taylorsville Football'
                },
                {   technologies: 'React, Javascript, NodeJS, Express, CSS, SCSS',
                    description: 'This project was created for a client that will be starting a food truck. It is a mobile responsive single page application made with React and SCSS', 
                    image: Rox1,
                    github: 'https://github.com/TylerKonesky/Roxabillys',
                    host: '',
                    title: 'Roxabillys'
                },
                
                
                
            ], 
            skills: [
                {type: 'Language', skill: "Javascript", proficiency: 'Advanced'},
                {type: 'Language', skill: "Typescript", proficiency: 'Intermediate'},
                {type: 'Language', skill: "HTML", proficiency: 'Advanced'},
                {type: 'Language', skill: "CSS", proficiency: 'Intermediate'},
                {type: 'Language', skill: "Java", proficiency: 'Beginner'},
                {type: 'Language', skill: "Algorithms", proficiency: 'Beginner'},
                {type: 'Framework', skill: "React", proficiency: 'Advanced'},
                {type: 'Framework', skill: "Node", proficiency: 'Advanced'},
                {type: 'Framework', skill: "Express", proficiency: 'Advanced'},
                {type: 'Framework', skill: "Angular", proficiency: 'Beginner'},
                {type: 'Framework', skill: "Redux", proficiency: 'Advanced'},
                {type: 'Framework', skill: "Jest / Testing", proficiency: 'Intermediate'},
                {type: 'Software', skill: "MongoDB", proficiency: 'Advanced'},
                {type: 'Software', skill: "Mongoose", proficiency: 'Advanced'},
                {type: 'Software', skill: "RESTful API's", proficiency: 'Advanced'},
                {type: 'Software', skill: "VS Code", proficiency: 'Intermediate'},
                {type: 'Software', skill: "PostGreSQL", proficiency: 'Beginner'},
                {type: 'Software', skill: "Git", proficiency: 'Intermediate'},
                
            ]  
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

    renderSkills(){
        return this.state.skills.map(skill =>{
            if(skill.proficiency === this.state.filter || this.state.filter === "All"){
                return(
                    <div className={skill.proficiency === "Advanced" ? "skills bold" : "skills"}>
                        {skill.skill}
                    </div>
                )
            }
        })
    }

   

    renderProjects(){
        return this.state.projects.map(project =>{
                return(
                    <div className="project-wrapper">
                        
                        <div className="image-wrapper">
                            <img src={project.image}/>
                        </div>
                        <div className="content-wrapper">
                            
                            <div className="tech">
                                <h4>Technologies</h4>
                                <div className="tech-wrapper">
                                    {project.technologies}
                                </div>
                                
                                
                            </div>
                            <div className="description">
                                <h4>Description</h4>
                                {project.description}
                            </div>
                            <div className="project-links">
                                {project.github !== '' ? <a href={project.github}>Github</a> : null}
                                {project.host !== '' ? <a href={project.host}>URL</a> : null}
                            </div>
                        </div>
                    </div>
                )
        })
    }

    renderCounter(start, end){
        return(
            <h2><CountUp  
                    start={this.state.viewPortEntered ? start : null} 
                    end={end} duration={3.00} 
                    redraw={true}>
                    {({countUpRef}) => {
                        return(<VisabilitySensor 
                                active={!this.viewPortEntered}
                                onChange={isVisible => {
                                    if(isVisible){
                                        this.setState({
                                            viewPortEntered : true
                                        })
                                    }
                                }}>
                                    <h2 ref={countUpRef}></h2>
                                </VisabilitySensor>)
                                }}
                    </CountUp>
            </h2>
        )
    }
    render(){
        return(
            <div>
                <div className="overlay"></div>
                <SimpleImageSlider className="slider" width={'100vw'} height={'100vh'} images={this.state.images} showBullets={false} slideDuration={0.5}/>
                
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
                            <div className="col-md-7 about-content">
                                <h4>About Me</h4>
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
                                <div className="skills-wrapper">
                                    {this.renderSkills()}
                                </div>
                                
                            </div> 
                        </div>
                    </div>
                </div>

                <div id="stats" className="section stats-section">
                    <div className="container">
                        <div className="row">
                           <div className="col-md-3 col-sm-6">
                                <div className="square-item">
                                    <div className="square-inner-container">
                                        <div className="square-icon">
                                            <FontAwesomeIcon icon={faCoffee}/>
                                        </div>
                                        <div className="square-content">
                                            {this.renderCounter(0,36)}
                                            <h3>Years Experience</h3>
                                        </div>
                                    </div>
                                </div>
                           </div>

                           <div className="col-md-3 col-sm-6">
                                <div className="square-item">
                                    <div className="square-inner-container">
                                        <div className="square-icon">
                                            <FontAwesomeIcon icon={faCoffee}/>
                                        </div>
                                        <div className="square-content">
                                            {this.renderCounter(0,4)}
                                            <h3>Years Experience</h3>
                                        </div>
                                    </div>
                                </div>
                           </div>

                           <div className="col-md-3 col-sm-6">
                                <div className="square-item">
                                    <div className="square-inner-container">
                                        <div className="square-icon">
                                            <FontAwesomeIcon icon={faCoffee}/>
                                        </div>
                                        <div className="square-content">
                                            {this.renderCounter(0,15)}   
                                            <h3>Years Experience</h3>
                                        </div>
                                    </div>
                                </div>
                           </div>

                           <div className="col-md-3 col-sm-6">
                                <div className="square-item">
                                    <div className="square-inner-container">
                                        <div className="square-icon">
                                            <FontAwesomeIcon icon={faCoffee}/>
                                        </div>
                                        <div className="square-content">
                                            {this.renderCounter(0,255)}
                                            <h3>Years Experience</h3>
                                        </div>
                                    </div>
                                </div>
                           </div>
                        
                        </div>
                    </div>
                </div>

                <div id="contact" className=" section contact-section">
                    <div className="col-md-12 text-center">
                        <p className="sub-heading">Like what you see?</p>
                        <h2>I'd love to hear from you!</h2>
                        <a href="mailTo:tylerkonesky@hotmail.com" className="contact-button">GET IN TOUCH!</a>
                    </div>

                </div>

                <div id="portfolio" className=" section">
                    <div className="container">
                        <div className="row">
                            <div className="heading">
                                <h2> Portfolio </h2>

                            </div>
                            <div className="item-container">
                                {this.renderProjects()}
                            </div>

                        </div>

                    </div>
                </div>

                <div className="copyright-section">
                    <div className="col-md-12 text-center">
                        <p>&copy; Copyright Tyler Konesky 2020</p>
                    </div>
                </div>




                
            </div>
        )
    }
}

export default Portfolio