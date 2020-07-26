import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import searchReducer from  './searchReducer'

const store = createStore(searchReducer, composeWithDevTools(applyMiddleware(thunk, logger)));
export default store;