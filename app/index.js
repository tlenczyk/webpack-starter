import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';

import './css/style.scss';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="about" component={About}/>
        </Route>
    </Router>,
    document.getElementById('app')
);
