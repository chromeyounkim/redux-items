import { combineReducers } from 'redux';
import { itemsFetched, itemsIsLoading, itemsHasErrored } from './items';

export default combineReducers({
    itemsFetched, itemsIsLoading, itemsHasErrored
});