import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import createDebounce from 'redux-debounced'
import { createStore, applyMiddleware } from 'redux'

import reducer from './reducers/reducer'

const createDebouncedStore = applyMiddleware( createDebounce() )(createStore)

const store = createDebouncedStore( reducer, applyMiddleware(thunk) )


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)


serviceWorker.unregister();
