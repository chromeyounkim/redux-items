export function itemsHasErrored(state = false, action) {
    switch(action.type) {
        case 'ITEMS_HAS_ERRORED':
            return action.payload;
        default:
            return state;
    }
}

export function itemsFetched(state = [], action) {
    switch(action.type) {
        case 'ITEMS_FETCHED':
            return action.payload;
        default:
            return state;
    }
}

export function itemsIsLoading(state = false, action) {
    switch(action.type) {
        case 'ITEMS_IS_LOADING':
            return action.payload;
        default:
            return state;
    }
}