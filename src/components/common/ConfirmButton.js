import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {lightBlue500, white} from 'material-ui/styles/colors';

export default class ConfirmButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render()    {
        return(
            <div>
                <RaisedButton onClick={this.props.onSearch} backgroundColor={lightBlue500} labelColor={white} label="Send"/>
            </div>
        );
    }
}