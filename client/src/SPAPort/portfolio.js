import React, {Component} from 'react';
import CountUp from 'react-countup';
import VisabilitySensor from 'react-visibility-sensor';
import SimpleImageSlider from 'react-simple-image-slider';
import ReactStickyHeader from 'react-sticky-header';
import Image1 from '../images/binary.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone, faAward, faBoxOpen, faBrain} from '@fortawesome/free-solid-svg-icons';
import {faLinkedin, faGithubSquare, faJsSquare} from '@fortawesome/free-brands-svg-icons';

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
                {type: 'Framework', skill: "NodeJS", proficiency: 'Advanced'},
                {type: 'Framework', skill: "Express", proficiency: 'Advanced'},
                {type: 'Framework', skill: "Angular", proficiency: 'Beginner'},
                {type: 'Framework', skill: "Redux", proficiency: 'Advanced'},
                {type: 'Framework', skill: "Jest / Testing", proficiency: 'Intermediate'},
                {type: 'Software', skill: "MongoDB", proficiency: 'Advanced'},
                {type: 'Software', skill: "Mongoose", proficiency: 'Advanced'},
                {type: 'Software', skill: "RESTful API's", proficiency: 'Advanced'},
                {type: 'Software', skill: "VS Code", proficiency: 'Intermediate'},
                {type: 'Software', skill: "SQL", proficiency: 'Beginner'},
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
                    <div key={skill.skill} className={skill.proficiency === "Advanced" ? "skills bold" : "skills"}>
                        {skill.skill}
                    </div>
                )
            }
            return null;
        })
    }

    renderProjects(){
        return this.state.projects.map(project =>{
                return(
                    <div key={project.title} className="project-wrapper">
                        
                        <div className="image-wrapper">
                            <img  alt={project.title} src={project.image}/>
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
                                <img alt="profile-pciture" className="about-image" src={ProfilePic}/>
                            </div>
                            <div className="col-md-7 about-content">
                                <h4>About Me</h4>
                                <p>
                            I’m enthusiastic, innovative, and goal-oriented professional with a sharp technical acumen, internship-based experience software development, and keen programming and coding expertise. Having completed two Web Development Bootcamps from Bottega and DevMountain, I have refined my strengths in object oriented programming, data structures, and Agile development methodologies. With understanding of the fundamentals principle of software / web development, excellent communication talents, my resourcefulness, and collaborative approach position me ready to thrive in this challenging field.
                            </p>
                           
                            <p>
                            I’m instrumental in collaborating with designers, developers, clients, and other product stakeholders to enhance product features, functionality, and reliability. I have excellent communication, interpersonal, organizational, relationship building, and problem solving skills.
                            </p>
                            </div>
                           
                            
                        </div>
                    </div>

                </div>
                    
            {/* </div> */}

                <ReactStickyHeader 
                    header={
                        <div className="Header_root header-wrapper">
                            <ul className="links-wrapper">
                                <li><a href="#">Home</a></li>
                                <li><a href="#about" id="about">About Me</a></li>
                                <li><a href="#skills" id="about">Skills</a></li>
                                <li><a href="#contact" id="about">Contact Me</a></li>
                                <li><a href="#portfolio">Portfolio</a></li>
                            </ul>
                        </div>

                    }
                />

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
                                            <FontAwesomeIcon icon={faBrain}/>
                                        </div>
                                        <div className="square-content">
                                            {this.renderCounter(0,3)}
                                            <h3>Years Experience</h3>
                                        </div>
                                    </div>
                                </div>
                           </div>

                           <div className="col-md-3 col-sm-6">
                                <div className="square-item">
                                    <div className="square-inner-container">
                                        <div className="square-icon">
                                            <FontAwesomeIcon icon={faAward}/>
                                        </div>
                                        <div className="square-content">
                                            {this.renderCounter(0,38)}
                                            <h3>Projects Completed</h3>
                                        </div>
                                    </div>
                                </div>
                           </div>

                           <div className="col-md-3 col-sm-6">
                                <div className="square-item">
                                    <div className="square-inner-container">
                                        <div className="square-icon">
                                            <FontAwesomeIcon icon={faBoxOpen}/>
                                        </div>
                                        <div className="square-content">
                                            {this.renderCounter(0,15)}   
                                            <h3>Certificates/Coursres</h3>
                                        </div>
                                    </div>
                                </div>
                           </div>

                           <div className="col-md-3 col-sm-6">
                                <div className="square-item">
                                    <div className="square-inner-container">
                                        <div className="square-icon">
                                            <FontAwesomeIcon icon={faJsSquare}/>
                                        </div>
                                        <div className="square-content">
                                            {this.renderCounter(0,48)}
                                            <h3>CodeWars Challenges</h3>
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
                        <div className="secondary-links">
                            <a href="https://www.linkedin.com/in/tylerkonesky/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a>
                            <a href="https://github.com/TylerKonesky" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithubSquare}/></a>
                            <a className="link-phone"><FontAwesomeIcon className="link-phone" icon={faPhone}/></a>
                            <a className="phone-number">801-471-8600</a>                          
                        </div>
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