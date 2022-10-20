import React from 'react';
import Header from './components/Header';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Detail from './components/Detail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
 

function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/detail/:id">
            <Detail/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
