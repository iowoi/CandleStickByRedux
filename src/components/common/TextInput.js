
import React from 'react';
import TextField from 'material-ui/TextField';
import {darkBlack} from 'material-ui/styles/colors';

export default class TextInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <TextField floatingLabelStyle={{color:darkBlack}}  errorText={this.props.errorMessage} floatingLabelText="幣別" hintText="請輸入英文" floatingLabelFixed={true}
                           onChange={this.props.onChangeCCY}/>
            </div>
        );
    }
};

