import React, {Component} from 'react';
import { Switch, Route, BrowserRouter } from  "react-router-dom";
import SignIn from './components/home/signin';
import SignUp from './components/registration/signup';
import Admin from './components/admin/admin';
import SpreadSheet from './components/spreadsheet/spreadsheet';
import Presentation from './components/presentation/presentation';
import './App.css';




class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <div className="App">
              <Route exact path="/" component={SignIn}/>
              <Route exact path="/signin" component={SignIn}/>
              <Route exact path="/signup" component={SignUp}/>
              <Route exact path="/execDashboard" component={Admin}/>
              <Route exact path="/spreadSheet" component={SpreadSheet}/>
              <Route exact path="/presenation" component={Presentation}/>

            </div>
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
