import React, {Component} from 'react';
import { Switch, Route, HashRouter } from  "react-router-dom";

import Login from './components/home/login';
import Registration from './components/registration/registration';
import Admin from './components/admin/admin';

import './App.css';

class App extends Component {
  render() {
    return (
        <HashRouter>
          <Switch>
            <div className="App">
              <Route exact path="/" component={Login}/>
              <Route exact path="/registration" component={Registration}/>
              <Route exact path="/admin" component={Admin}/>
            </div>
          </Switch>
        </HashRouter>
    );
  }
}

export default App;
