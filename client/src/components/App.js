import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';

import Admin from './Admin/Admin';
import Header from './Header/Header';
import Landing from './Landing/Landing';

class App extends Component{
  render(){
    return(
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Landing}/>
              <Route path="/pageAdmin" component={Admin}/>

            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, actions)(App)