import {createStore} from 'redux';
import {reducerFunction,initialState} from './reducer';

export const configStore = () => {
    const store = createStore(reducerFunction,initialState);
    return store;
}