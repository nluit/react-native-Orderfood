import React from "react";
import {createStore , applyMiddleware , compose} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers';
import createSagaMiddleWare from 'redux-saga';
import rootSaga from './sagas/rootSaga';
import Navigation from './routes/drawer';


const sagaMiddleWare = createSagaMiddleWare();
let store = createStore(allReducers,applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(rootSaga);

export default function App() {
  return (
  <Provider store={store}>
    <Navigation />
  </Provider>
  )
}

      