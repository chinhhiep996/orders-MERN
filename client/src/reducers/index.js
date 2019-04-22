import { combineReducers } from 'redux'

import productsReducer from '../reducers/products';
import cartsReducer from '../reducers/carts';

export default combineReducers({
    productsReducer,
    cartsReducer
});