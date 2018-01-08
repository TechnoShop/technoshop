import React from 'react';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';
import Home from './Containers/Home/Home';
import App from './Containers/App/App';
import Projects from './Containers/Projects/Projects';

export default (
    <Router history={hashHistory} >
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/projects" component={Projects} />
        </Route>
    </Router>
);