import Immutable from 'immutable';

export const chartState = Immutable.fromJS({
    "inputs":{
       "currency" : ""
    },
    "result": {
        "min" : null,
        "sec" : null
    }
    // ,
    // result: [
    //     [ts]: {
    //         "open": 123,
    //         "close": 345
    //     }
    // ]
});