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

let totalData = [],
    sortSellPoints = [],
    allSellPoints = []


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
                let d = new Date(),
                    m = d.getMinutes(),
                    s = d.getSeconds()

                let newData = {
                   currentTime: parseInt(new Date().setMilliseconds(0)),
                    min : {
                        timestamp : m
                    },
                    sec : {
                        timestamp : s
                    }
                }

                // get sell points's high point & low point
                allSellPoints.push(parseFloat(result.sell));
                sortSellPoints.push(parseFloat(result.sell));
                sortSellPoints = sortSellPoints.sort();

                let open = allSellPoints[0],
                    close = allSellPoints[allSellPoints.length-1],
                    low = sortSellPoints[0],
                    high = sortSellPoints[sortSellPoints.length-1]

                // everySecond
                newData.sec.open = open
                newData.sec.high = high
                newData.sec.low = low
                newData.sec.close = close

                console.log('second: '+s)

                if(s === 0){
                    totalData.push([
                        newData.currentTime,
                        newData.sec.open,
                        newData.sec.high,
                        newData.sec.low,
                        newData.sec.close
                    ])
                    allSellPoints = [];
                    sortSellPoints = [];


                }

                dispatch(dataLoaded(totalData));

            })
            .catch((e) => {
                console.log(e);
                // TODO:dispatch(dataVaRHasError(true));
            })
    }

}


// function DateTimezone(offset) {
//
//     // 建立現在時間的物件
//     let d = new Date()
//
//     // 取得 UTC time
//     let utc = d.setMilliseconds(0) + (d.getTimezoneOffset() * 60000);
//
//     // 新增不同時區的日期資料
//     return utc + (3600000*offset);
//     //return new Date(utc + (3600000*offset));
//
//
// }