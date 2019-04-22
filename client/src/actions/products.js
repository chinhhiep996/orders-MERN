import axios from 'axios';

import {
    GET_PRODUCTS
} from '../constants/products';

axios.defaults.baseURL = 'http://localhost:8080/api';

export const getProducts = () => dispatch => {
    axios.get('/products')
        .then(res => {dispatch({
            type: GET_PRODUCTS,
            payload: res.data
        }); console.log(res.data)})
        .catch(error => console.error(error));
};