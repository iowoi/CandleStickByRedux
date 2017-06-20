import {createStore, applyMiddleware, compose} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import Immutable from 'immutable';
import rootReducer from '../reducers';
import { Iterable } from 'immutable';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//logger
const stateTransformer = (state) => {
    if (Iterable.isIterable(state)) return state.toJS();
    else return state;
};

const logger = createLogger({
    stateTransformer,
});

const initialState = Immutable.Map();

export default createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk, logger))

);