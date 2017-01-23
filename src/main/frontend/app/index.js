import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import PageLayout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import ItemDetails from './pages/ItemDetails';
import {Provider} from 'react-redux';
import store from './redux/store'

import './css/style.scss';

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={PageLayout}>
                <IndexRoute component={Home}></IndexRoute>
                <Route path="/:itemId" component={ItemDetails}/>
                <Route path="about" component={About}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
