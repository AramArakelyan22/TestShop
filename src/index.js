import * as React from "react";
import  ReactDOM from "react-dom";
import  App  from "./App.jsx";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import reducers from './reducers';
import 'regenerator-runtime/runtime';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import fetchAllCartItemsThread from './sagas/loadAllCartItems';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(combineReducers(reducers), applyMiddleware(sagaMiddleware));

sagaMiddleware.run(function*() {
  yield [
    fetchAllCartItemsThread(),
  ]
  });

if (process.env.NODE_ENV !== 'production') {
     console.log('Looks like we are in development mode!');
   }


   //Add Provider
ReactDOM.render(
<Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
   document.getElementById("root")
);