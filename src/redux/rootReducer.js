import { combineReducers } from "redux";
import { inputReducer } from "./inputReducer";
import { likesReducer } from "./likesReducer";

export const rootReducer = combineReducers({
    likesReducer: likesReducer,
    inputReducer: inputReducer,
    
})