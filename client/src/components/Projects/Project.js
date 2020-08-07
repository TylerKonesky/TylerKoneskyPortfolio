import React, {Component} from 'react';
import './Project.css';

class Project extends Component{
    constructor(props){
        super(props)

    }

    render(){
        return(
            <div className="project-wrapper landing-wrapper">   
                <h4 className="project-title">Title</h4>
                <div className="project-body-wrapper">

                    <div className="project-images">
                        <div className="main-image">
                            <div>IMAGE</div>
                        </div>
                        <div className="sub-images">
                            <div className="sub-image">1</div>
                            <div className="sub-image">2</div>
                            <div className="sub-image">3</div>
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

                </div>
                

            </div>
        )
    }
}

export default Project