import {createStore, combineReducers} from 'redux';
import {Dishes} from './Dishes';
import {Leaders} from './Leaders';
import {Comments} from './Comments';
import {Promotions} from './Promotions';

export const configStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            leaders: Leaders,
            comments: Comments,
            promotions : Promotions
            }
        )
    );
    return store;
}