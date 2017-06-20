import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import 'whatwg-fetch';
import {BrowserRouter, Route} from 'react-router-dom';

import App from './app';
import store from './store';


ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider >
            <BrowserRouter>
                <Route path="/" component={App} />
            </BrowserRouter>
        </MuiThemeProvider>
    </Provider>,
    document.querySelector('#container')
);