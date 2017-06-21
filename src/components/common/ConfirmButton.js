import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {lightBlue500, white} from 'material-ui/styles/colors';

export default class ConfirmButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render()    {
        return(
                <RaisedButton onClick={this.props.onClick} backgroundColor={lightBlue500} labelColor={white} label={this.props.label}/>
        );
    }
}