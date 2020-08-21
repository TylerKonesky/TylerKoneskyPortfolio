import React, {Component} from 'react';
import Card from '../Cards/Card';
import './Project.css';

class Project extends Component{
    constructor(props){
        super(props)

    }

    render(){
        return(
            <div className="project-wrapper landing-wrapper">  
                <h4>Featured Projects</h4> 
                <div className="card-wrapper">
                    <Card />
                    <Card />
                </div>
                
            </div>
        )
    }
}

export default Project