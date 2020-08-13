import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import Records from './components/Records';
 import SignUp from './components/signUp';
 import SignIn from './components/SignIn';
 import  Heading from './components/Heading';
import './components/style.css';
 

function App() {
  return (
    <Router>
    <div className="App">
    <Heading/>
       <Switch>
       <Route path="/home" exact component={Records}/>
      <Route path="/"  component={SignUp}/>
      <Route path="/signin" component={SignIn} />
      
       </Switch>
    </div>
    </Router>
  );
}

export default App;
