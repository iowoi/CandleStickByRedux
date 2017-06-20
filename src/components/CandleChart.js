import React from 'react';
import ReactHighstock from 'react-highcharts/ReactHighstock.src';



export default class CandleChart extends React.Component {
    constructor(props){
        super(props)
    }


    render(){

        console.log(this)
        const config = {
            // chart: {
            //         events: {
            //         load: t
            //     }
            // },
            title: {
                text: 'Current Exchange Rate:'
            },

            rangeSelector: {
                buttons: [{
                    type: 'hour',
                    count: 1,
                    text: '1h'
                }, {
                    type: 'day',
                    count: 1,
                    text: '1D'
                }, {
                    type: 'all',
                    count: 1,
                    text: 'All'
                }],
                selected: 1,
                inputEnabled: false
            },

            series: [{
                type: 'candlestick',
                data: this.props.data
            }]
        }
        return(
        <div>
            <ReactHighstock config={config} />

        </div>
        )
    }
}

