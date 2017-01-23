export const CARDS_FETCHING = 'CARDS_FETCHING'
export const CARDS_FETCHED = 'CARDS_FETCHED'

export function fetchCards() {
    return dispatch => {
        dispatch(cardsFetching())

        return fetch('/api/cards')
            .then(res => res.json())
            .then(data => dispatch(cardsFetched(data)));
    }
}

function cardsFetching() {
    return {
        type: CARDS_FETCHING
    };
}

function cardsFetched(data) {
    return {
        type: CARDS_FETCHED,
        payload: {
            cards: data
        }
    };
}
