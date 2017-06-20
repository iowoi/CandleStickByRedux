// import { handleActions } from 'react-actions';
// import { ChartState } from '../constants/model';
//
//
// const chartReducer = handleActions({
//     DATA_LOADED: (state,{payload}) => {
//         let newState = state.set('result',payload);
//         return newState;
//     }
//
// },ChartState);
//
//
// export default chartReducer;


import {combineReducers} from 'redux-immutable';
import chartReducer from './chartReducer';

const rootReducer = combineReducers({
    chartReducer
});

export default rootReducer;
