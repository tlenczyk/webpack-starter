import React from 'react';
import {Link} from 'react-router';


export default class ItemDetails extends React.Component {
    render() {
        return (
            <div>
                Item details: {this.props.params.itemId}
                <br/>
                <Link to="/" >Go Home</Link>
            </div>
        )
    }
}