import { handleActions } from 'redux-actions';
import { chartState }  from '../constants/model';

const chartReducer = handleActions({
    CHANGE_CURRENCY:(state, {payload}) => {
        let newState = state.set('inputs', state.get('inputs').merge(payload))
        return newState;
    },
    DATA_LOADING:(state,{payload})=>{
        let newState = state.set('result',payload);
        return newState;
    },
    DATA_LOADED:(state,{payload})=>{
        let newState = state.set('result',payload);
        return newState;
    }
},chartState);



export default chartReducer;