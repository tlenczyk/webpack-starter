import React from 'react';
import CardItem from './CardItem';

export default class Cards extends React.Component {
    constructor() {
        super();
    }

    render() {
        const cardsData = [
            {id: 1, title: 'Title1', text: 'text1'},
            {id: 2, title: 'Title2', text: 'text2'},
            {id: 3, title: 'Title3', text: 'text3'},
            {id: 4, title: 'Title4', text: 'text4'},
            {id: 5, title: 'Title5', text: 'text5'}
        ];
        const cards = cardsData.map((data) =>
            <CardItem key={data.id} cardData={data}/>
        );
        return (
            <div class="row">
                {cards}
            </div>
        );
    }
}