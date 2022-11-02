import { combineReducers } from "redux";
import { commentsReducer } from "./commentsReducer";
import { inputReducer } from "./inputReducer";
import { likesReducer } from "./likesReducer";

export const rootReducer = combineReducers({
    likesReducer: likesReducer,
    inputReducer: inputReducer,
    commentsReducer: commentsReducer,
    
})