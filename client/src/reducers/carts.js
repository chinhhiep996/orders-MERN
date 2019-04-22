import { 
    GET_CART,
    ADD_TO_CART
} from '../constants/carts';

const initialState = []

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_CART:
            return action.payload;
        case ADD_TO_CART:
            return [
                action.payload,
                ...state
            ]
        default:
            return state;
    }
}