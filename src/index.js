import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Weather from './pages/Weather'
import { Router, Route, browserHistory } from 'react-router'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/city/:cityName" component={Weather} />
  </Router>
), document.getElementById('root'));
