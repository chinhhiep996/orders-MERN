import {
    GET_PRODUCTS,
    LOAD_PRODUCTS
} from '../constants/products';

const initialState = {
    loading: true,
    products: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case LOAD_PRODUCTS:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}