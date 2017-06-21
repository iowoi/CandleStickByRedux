import React from 'react';
import CandleChart from './CandleChart';
import {
    TextInput,
    ConfirmButton
} from './common';


var Timer ;

export default class ChartBox extends React.Component {
    constructor(props) {
        super(props);
    }
    // componentWillReceiveProps(nextProps) {
    //     console.log("nextProps>>>>>>",this.props)
    //     console.log("nextProps>>>>>>",nextProps)
    // }


    onSearch(){

        let elm = this

        Timer = setInterval(function Start() {
            elm.props.onSearch(elm.props.currency);
            elm.setState({ result : elm.props.result})
        },1000)

        // elm.props.onSearch(elm.props.currency);
        // elm.setState({ result : elm.props.result})
    }

    onStop(){
        clearInterval (Timer);
    }

    render(){
        return (
            <div>
                <TextInput onChangeCCY={this.props.onChangeCCY}/>
                <ConfirmButton onClick={this.onSearch.bind(this)} label="start"/>
                <span>     </span>
                <ConfirmButton onClick={this.onStop.bind(this)} label="stop" />
                <CandleChart data={this.props.result}/>

            </div>

        );
    }
}


