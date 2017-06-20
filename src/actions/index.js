/* ---  Redux ---
/   NOTE: Using Action creator create action by actionType(constants)
/*/


import {createAction} from 'redux-actions';

import {
    DATA_LOADING,
    DATA_HAS_ERROR,
    DATA_LOADED,
    CHANGE_CURRENCY
} from '../constants/chartActionTpye';

export const dataLoading = createAction('DATA_LOADING');
export const dataHasError = createAction('DATA_HAS_ERROR');
export const dataLoaded = createAction('DATA_LOADED');
export const changeCCY = createAction('CHANGE_CURRENCY');

// ConfirmBtn OnClick do dataFetch()

let totalData = [];
let sellPoints = [];



export function dataFetch() {

    return (dispatch, getState) => {
        // get current State

        let state = getState();
        let data = {
            currency: state.getIn(['chartReducer', 'inputs', 'currency']),
            result: state.getIn(['chartReducer', 'result'])
        }
        // if (state == null){
        //     data.currency = 'USDJPY'
        // }
        // call api
        let url = `http://52.221.31.167/yks/api/mdm/price/symbol/`+data.currency;
        fetch(url,{
            method: 'get'
        })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                // TODO:dispatch(dataVaRIsLoading(false));
                return response.json();
            })
            .then((result) => {
                // create current data

                // TODO: collect every Second

                // TODO: Collect every minute to get the high point and low point
                var newData = [
                    parseInt(new Date().setMilliseconds(0)), // InsertTime
                    parseFloat(result.buy), //Bid
                    parseFloat(result.sell), //Ask
                    parseFloat(111.209), //High
                    parseFloat(101.209)  //Low
                ]
                totalData.push(newData)
                // getDataOnEveryMinute(result)
                dispatch(dataLoaded(totalData));

            })
            .catch((e) => {
                console.log(e);
                // TODO:dispatch(dataVaRHasError(true));
            })
    }

}


function getDataOnEveryMinute(result){
    var newData = [
        parseInt(new Date().setMilliseconds(0)), // InsertTime
        parseFloat(result.buy), //Bid
        parseFloat(result.sell) //Ask
    ]
  //  totalData.push(newData)

    sellPoints.push(newData[2])
    sellPoints.sort();
    let high = sellPoints[0],
        low = sellPoints[sellPoints.length-1]
    newData.push(high,low)

    console.log('All:',newData)

    //

    // get Low point
    // for(let i = 0; i < totalData.length; i++){
    //     console.log("totalData",totalData[2])
    //     // for (let j = 0; j < totalData[i].length; j++) {
    //     //     sellPoints.push(totalData[i][2])
    //     // }
    // }
    // sellPoints.sort();

  //  console.log('All:',sellPoints)
    // console.log('Low:',sellPoints[0])
    // console.log('High:',sellPoints[0])
    //
    // console.log("totalData>>>>",totalData)

        // return totalData.push(newData)

}