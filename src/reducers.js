import {CHANGE_SEARCH_FIELD, REQUEST_REDUX_PENDING, REQUEST_REDUX_SUCCESS, REQUEST_REDUX_FAILED} from './constants';

const initialStateSearch = {
    searchField: ''
}

export const searchRobots = (state=initialStateSearch, action={}) => {
    switch(action.type){
        case CHANGE_SEARCH_FIELD: 
            return  {...state, searchField: action.payload}
        default: 
            return state;
    }
}

const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''

}

export const requestRobots = (state=initialStateRobots, action={}) => {
    switch(action.type){
        case REQUEST_REDUX_PENDING: 
            return {...state, isPending: true}
        case REQUEST_REDUX_SUCCESS: 
            return {...state, robots:action.payload, isPending:false}
        case REQUEST_REDUX_FAILED: 
            return {...state, error:action.payload, isPending: false}
        default:
            return state;
    }
}