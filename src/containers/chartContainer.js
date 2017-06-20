//--- UI ---//
import ChartBox from '../components/chart';

//---  Redux ---//
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import {
    changeCCY,
    dataFetch
} from '../actions';




const mapStateToProps = (state) => ({
    inputs: state.getIn(['chartReducer', 'inputs']),
    result: state.getIn(['chartReducer', 'result'])
});

const mapDispatchToProps = (dispatch) => ({
    onChangeCCY: (event,newValue) => {
        dispatch(changeCCY({currency:newValue}))
    },
    onSearch: (payload) => {
        dispatch(dataFetch({result:payload}))
    }
});




export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(ChartBox))






