import {COMMENTS} from '../shared/comments.js';
import * as Action from './ActionList';

export const Comments = (state=COMMENTS,action) => {
    switch(action.type){
        case Action.ADD_COMMENT:
            let comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            console.log("Comment: ",state.concat(comment),state,comment)
            return state.concat(comment);

        default:
            return state;
    }
}