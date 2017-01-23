import React from 'react';
import CardItem from './CardItem';
import {connect} from 'react-redux';
import {fetchCards} from '../redux/actions'

@connect((store) => {
    return {
        cards: store.cards
    };
})
export default class Cards extends React.Component {
    componentWillMount(){
        this.props.dispatch(fetchCards());
    }

    render() {
        const cards = this.props.cards.map((data) =>
            <CardItem key={data.id} cardData={data}/>
        );

        return (
            <div class="row">
                {cards}
            </div>
        );
    }
}