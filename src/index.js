import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore as createStore} from 'redux';
import { rootReducer } from './redux/rootReducer'; 
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { compose, applyMiddleware } from 'redux';
import App from './App';
import './index.css';

const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>


);

