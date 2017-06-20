import React from 'react';
import CandleChart from './CandleChart';
import {
    TextInput,
    ConfirmButton,
} from './common';


export default class ChartBox extends React.Component {
    constructor(props) {
        super(props);
    }
    // componentWillReceiveProps(nextProps) {
    //     console.log("nextProps>>>>>>",this.props)
    //     console.log("nextProps>>>>>>",nextProps)
    // }



    currentData(){

        //this.props.onSearch(this.props.currency);
        let totalSeconds = new Date().getSeconds();
        let elm = this
        var Timer = setInterval(function () {
            ++totalSeconds;
            if(pad(totalSeconds%10) == 0){
                // do action
                elm.props.onSearch(elm.props.currency);
                elm.setState({ result :  elm.props.result})
                //clearInterval(Timer)
            }
        },1000)
        function pad(val) {
            var valString = val + "";
            if(valString.length < 2) {
                return "0" + valString;
            }
            else {
                return valString;
            }
        }

    }

    render(){
        return (
            <div>
                <TextInput onChangeCCY={this.props.onChangeCCY}/>
                <ConfirmButton onSearch={this.currentData.bind(this)}/>
                <CandleChart data={this.props.result} />
            </div>

        );
    }
}


