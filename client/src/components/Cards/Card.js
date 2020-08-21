import React, {Component} from 'react';
import image1 from '../../images/rox-main.png'

class Card extends Component{
    constructor(props){
        super();
    }

    render(){
        return(
            <div className="row">
                <div className="col s12 m7">
                    <div className="col s12 offset-s4 card">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src={image1}></img>
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">
                                Roxabillys 
                                <i className="material-icons right">more_vert</i>
                            </span>
                            <p><a href="https://www.google.com">Github</a></p>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">
                                Roxabillys
                                <i className="material-icons right">close</i>
                            </span>
                            <p>Here is all of the additional information that I will display when clicked....</p>
                        </div>

                    </div>
                </div>
            </div>
            
        )
    }
}

export default Card