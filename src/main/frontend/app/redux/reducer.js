import {CARDS_FETCHING, CARDS_FETCHED} from './actions'

export default function reducer(state = {
    cards: []
}, action) {
    switch (action.type) {
        case CARDS_FETCHING: {
            return {...state, fetching: true};
            break;
        }
        case CARDS_FETCHED: {
            return {...state, fetching: false, cards: action.payload.cards};
            break;
        }
    }
    return state;
}