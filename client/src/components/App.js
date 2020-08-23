import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';

import Portfolio from '../SPAPort/portfolio';

class App extends Component{
  componentDidMount(){
   
  }
  render(){
    return(
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/" component={Portfolio}/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, actions)(App)