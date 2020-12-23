import {DISHES} from '../shared/dishes.js';
import {LEADERS} from '../shared/leaders.js';
import {COMMENTS} from '../shared/comments.js';
import {PROMOTIONS} from '../shared/promotion.js';

export const initialState = {
    dishes:DISHES,
    leaders:LEADERS,
    promotions:PROMOTIONS,
    comments:COMMENTS
}

export const reducerFunction = (state=initialState,action) => {
    return state;
}