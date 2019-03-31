import {CHANGE_SEARCH_FIELD, REQUEST_REDUX_PENDING, REQUEST_REDUX_SUCCESS, REQUEST_REDUX_FAILED} from './constants';

export const setSearchFeild = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const requestRobots = () => (dispatch) => {
    dispatch({type : REQUEST_REDUX_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
        .then( response => response.json())
        .then( data => dispatch({type: REQUEST_REDUX_SUCCESS, payload: data}))
        .catch( error => dispatch({type: REQUEST_REDUX_FAILED, payload: error}))
}