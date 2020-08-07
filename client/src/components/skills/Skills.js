import React, {Component} from 'react';
import './Skills.css'

class Skills extends Component{
    

    render(){
        return(
            <div className="landing-section landing-wrapper">
                <h3>Skills</h3>
                <div className="skills-wrapper">
                    <table>
                        <tr>
                            <th>Languages</th>
                            <th>Frameworks</th>
                            <th>Software & Tools</th>
                        </tr>
                        <tr>
                            <td>Javascript</td>
                            <td>React</td>
                            <td>MongoDB</td>
                        </tr>
                        <tr>
                            <td>NodeJS</td>
                            <td>Express</td>
                            <td>Mongoose</td>
                        </tr>
                        <tr>
                            <td>HTML</td>
                            <td>Bootstrap</td>
                            <td>Git</td>
                        </tr>
                        <tr>
                            <td>CSS</td>
                            <td>Redux</td>
                            <td>Mongose</td>
                        </tr>
                        <tr>
                            <td>Java</td>
                            <td>Spring/Spring Bootstrap</td>
                            <td>VSCode</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Intellij</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>RESTful API's</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>GitHub</td>
                        </tr>
                    </table>

                </div>
            </div>
        )
    }
}

export default Skills