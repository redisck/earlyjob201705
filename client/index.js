import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import Home from "./containers/Home/index";
import Login from "./containers/Login/index";

ReactDOM.render(
  <Router>
    <div>
      <Route exact={true} path="/" component={Home}/>
      <Route path="/login" component={Login}/>
    </div>
  </Router>,document.querySelector('#root')
);
