import React from 'react';
import Header from '../components/Header';

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header title={'Header title'}/>
                <div class="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}