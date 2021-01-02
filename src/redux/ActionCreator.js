import * as Action from './ActionList';

export const addComment = (dishId,rating,author,comment) => ({
    type: Action.ADD_COMMENT,
    payload: {
        dishId:dishId,
        rating:rating,
        author:author,
        comment:comment
    }
})