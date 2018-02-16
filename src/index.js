import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Redux
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducers/reducer'

import registerServiceWorker from './registerServiceWorker';
// const loggerMiddleware = createLogger()


let store = createStore(reducer, applyMiddleware(thunkMiddleware))

ReactDOM.render(
  <Provider store={store}> 
    <App /> 
  </Provider>, document.getElementById('root'));

registerServiceWorker();
