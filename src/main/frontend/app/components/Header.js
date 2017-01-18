import React from 'react';
import {Link} from 'react-router';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';

export default class Header extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <AppBar class="header" title="React Toolbox" leftIcon='menu'>
                <Navigation class="navigation" type='horizontal'>
                    <Link class="link" to="/">Home</Link>
                    <Link to="about">About</Link>
                </Navigation>
            </AppBar>
        );
    }
}