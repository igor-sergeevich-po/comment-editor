import { COMMENT_CREATE, COMMENT_DELETE, COMMENT_UPDATE, COMMENTS_LOAD } from "./types"

const initialState = {
    comments: []
}

export const commentsReducer = (state=initialState, action) => {


    switch (action.type) {
        case COMMENT_CREATE:
            return {
                ...state,
                comments: [...state.comments, action.data ]
            }
        case COMMENT_UPDATE:
            const { data } = action;
            const { comments } = state;
            const itemIndex = comments.findIndex(comment => comment.id === data.id);

            const nextComments = [
                ...comments.slice(0, itemIndex),
                data,
                ...comments.slice(itemIndex+1)
            ];
            return {
                ...state,
                comments: nextComments

            }

            case COMMENT_DELETE:
                return (() => {
                const { id } = action;
                const { comments } = state;
                const itemIndex = comments.findIndex(comment => comment.id === id);
    
                const nextComments = [
                    ...comments.slice(0, itemIndex),
        
                    ...comments.slice(itemIndex+1)
                ];
                return {
                    ...state,
                    comments: nextComments
    
                }
                })();
    
        case COMMENTS_LOAD:
            const commentdNew = action.data.map(res => {
                return {
                    text: res.name,
                    id: res.id
                }
            })
            return {
                ...state,
                comments: commentdNew
            }
    
        default:
            return state;
    }
}