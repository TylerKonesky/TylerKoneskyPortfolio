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
            <Card />
                {/* <h4 className="project-title">{this.props.title}</h4>
                <div className="project-body-wrapper">

                    <div className="project-images">
                        <div className="main-image">
                            <img src={this.props.image1}></img>
                        </div>
                        <div className="sub-images">
                            <img src={this.props.image2}></img>
                            <img src={this.props.image3}></img>
                            <img src={this.props.image1}></img>
                        </div>
                    </div>

                    <div className="content-wrapper">
                        <div className="content-summary">
                            <div className="content-summary-header">
                                <div>Github: www.github.com</div>
                                <div>Hosted URL: www.github.com</div>
                            </div>
                        </div>
                        <div className="content-skills-wrapper">
                            <div>
                                Skills stuff....
                            </div>
                        </div>
                    </div>

                </div> */}
                

            </div>
        )
    }
}

export default Project