import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import allReducer from '../reducers';
import { getProducts } from '../actions/products';

const store = createStore(allReducer, applyMiddleware(thunk));

store.dispatch(getProducts())

export default store;