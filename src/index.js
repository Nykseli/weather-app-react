import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Weather from './pages/Weather'
import Login from './pages/Login'
import { Router, Route, browserHistory } from 'react-router'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/city/:cityName" component={Weather} />
    <Route path="/login" component={Login} />
  </Router>
), document.getElementById('root'));
