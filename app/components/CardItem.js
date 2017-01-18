import React from 'react';
import {Link} from 'react-router';
import {Card, CardText} from 'react-toolbox/lib/card';

export default class Cards extends React.Component {
    constructor() {
        super();
    }

    render() {
        const cardData = this.props.cardData;
        return (

            <div class="card-item col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <Card key={cardData.id}>
                    <CardText><Link to={`/${cardData.id}`} >{cardData.text}</Link></CardText>
                </Card>
            </div>
        );
    }
}