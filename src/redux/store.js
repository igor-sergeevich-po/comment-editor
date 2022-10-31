import { legacy_createStore as createStore} from 'redux'

const initialState = {
    likes: 10
}

const reducer = (state=initialState, action) => {
    console.log('reducer>', action);

    return state;
}

export const store = createStore(reducer);

//  default store;