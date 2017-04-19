import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logger from 'redux-logger'
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './Reducers'
import injectTapEventPlugin from 'react-tap-event-plugin';

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware,logger)
)

injectTapEventPlugin();

ReactDOM.render(
	<Provider store={store}>
		<MuiThemeProvider>
	    	<App />
		</MuiThemeProvider>
	</Provider>,
	document.getElementById('root')
);
